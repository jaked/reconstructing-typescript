import * as AST from '@babel/types';
import { bug } from '../util/err';
import * as Trace from '../util/trace';
import Type from '../type';
import Env from './env';
import synth from './synth';

// 'b' may contain Not-types
// result does not contain Not-types
export const narrowType = Trace.instrument('narrowType',
function (x: Type, y: Type): Type {
  if (Type.isNever(x) || Type.isNever(y)) return Type.never;
  if (Type.isUnknown(x)) return y;
  if (Type.isUnknown(y)) return x;

  if (Type.isUnion(x))
    return Type.union(...x.types.map(a => narrowType(a, y)));
  if (Type.isUnion(y))
    return Type.union(...y.types.map(b => narrowType(x, b)));

  if (Type.isIntersection(x))
    return Type.intersection(...x.types.map(a => narrowType(a, y)));
  if (Type.isIntersection(y))
    return Type.intersection(...y.types.map(b => narrowType(x, b)));

  if (Type.isNot(y)) {
    if (Type.isSubtype(x, y.base) && Type.isSubtype(y.base, x)) return Type.never;
    else if (Type.isBoolean(x) && Type.isSingleton(y.base) && Type.isBoolean(y.base.base)) {
      if (y.base.value === true) return Type.singleton(false);
      else return Type.singleton(true);
    }
    else return x;
  }

  if (Type.isSingleton(x) && Type.isSingleton(y))
    return (x.value === y.value) ? x : Type.never;
  if (Type.isSingleton(x))
    return (x.base.type === y.type) ? x : Type.never;
  if (Type.isSingleton(y))
    return (y.base.type === x.type) ? y : Type.never;

  if (Type.isObject(x) && Type.isObject(y)) {
    const properties =
      x.properties.map(({ name, type: xType }) => {
          const yType = Type.propType(y, name);
          const type = yType ? narrowType(xType, yType) : xType;
          return { name, type };
          // if there are  fields in `y` that are not in `x`, ignore them
        },
        { }
      );
    if (properties.some(({ type }) => Type.isNever(type)))
      return Type.never;
    else
      return Type.object(properties);
  }

  return x.type === y.type ? x : Type.never;
}
);

const narrowPathIdentifier = Trace.instrument('narrowPathIdentifier',
function narrowPathIdentifier(
  env: Env,
  ast: AST.Identifier,
  otherType: Type
): Env {
  const identType = env.get(ast.name);
  if (!identType) bug('expected bound identifer');
  const type = narrowType(identType, otherType);
  return env.set(ast.name, type);
}
);

const narrowPathMember = Trace.instrument('narrowPathMember',
function narrowPathMember(
  env: Env,
  ast: AST.MemberExpression,
  otherType: Type
): Env {
  if (ast.computed) bug(`unimplemented computed`);
  if (!AST.isIdentifier(ast.property)) bug(`unexpected ${ast.property.type}`);
  return narrowPath(
    env,
    ast.object,
    Type.object({ [ast.property.name]: otherType })
  );
}
);

const narrowPathUnary = Trace.instrument('narrowPathUnary',
function narrowPathUnary(
  env: Env,
  ast: AST.UnaryExpression,
  otherType: Type
): Env {
  switch (ast.operator) {
    case '!':
      return env;

    case 'typeof':
      if (Type.isSingleton(otherType)) {
        switch (otherType.value) {
          case 'boolean':
            return narrowPath(env, ast.argument, Type.boolean);
          case 'number':
            return narrowPath(env, ast.argument, Type.number);
          case 'string':
            return narrowPath(env, ast.argument, Type.string);
          case 'object':
            return narrowPath(env, ast.argument, Type.object({}));
          // TODO functions
          default: return env;
        }
      } else if (Type.isNot(otherType) && Type.isSingleton(otherType.base)) {
        switch (otherType.base.value) {
          case 'boolean':
            return narrowPath(env, ast.argument, Type.not(Type.boolean));
          case 'number':
            return narrowPath(env, ast.argument, Type.not(Type.number));
          case 'string':
            return narrowPath(env, ast.argument, Type.not(Type.string));
          case 'object':
            return narrowPath(env, ast.argument, Type.not(Type.object({})));
          // TODO functions
          default: return env;
        }
      }
      else return env;

    default: bug(`unexpected ${ast.operator}`);
  }
}
);

// narrow environment under the assumption that `ast` has type `otherType`
const narrowPath = Trace.instrument('narrowPath',
function narrowPath(
  env: Env,
  ast: AST.Expression,
  otherType: Type
): Env {
  switch (ast.type) {
    case 'Identifier':
      return narrowPathIdentifier(env, ast, otherType);

    case 'MemberExpression':
      return narrowPathMember(env, ast, otherType);

    case 'UnaryExpression':
      return narrowPathUnary(env, ast, otherType);

    default: return env;
  }
}
);

const narrowUnary = Trace.instrument('narrowUnary',
function narrowUnary(
  env: Env,
  ast: AST.UnaryExpression,
  assume: boolean
): Env {
  switch (ast.operator) {
    case '!':
      return narrow(env, ast.argument, !assume);

    case 'typeof':
      // typeof always returns truthy
      return env;

    default: bug(`unexpected ${ast.operator}`);
  }
}
);

const narrowLogical = Trace.instrument('narrowLogical',
function narrowLogical(
  env: Env,
  ast: AST.LogicalExpression,
  assume: boolean
): Env {
  switch (ast.operator) {
    case '&&':
      if (assume) {
        env = narrow(env, ast.left, true);
        return narrow(env, ast.right, true);
      } else {
        if (Type.isTruthy(synth(env, ast.left)))
          return narrow(env, ast.right, false);
        else if (Type.isTruthy(synth(env, ast.right)))
          return narrow(env, ast.left, false);
        else
          return env;
      }

    case '||':
      if (!assume) {
        env = narrow(env, ast.left, false);
        return narrow(env, ast.right, false);
      } else {
        if (Type.isFalsy(synth(env, ast.left)))
          return narrow(env, ast.right, true);
        else if (Type.isFalsy(synth(env, ast.right)))
          return narrow(env, ast.left, true);
        else
          return env;
      }

    default: bug(`unexpected AST ${ast.operator}`);
  }
}
);

const narrowBinary = Trace.instrument('narrowBinary',
function narrowBinary(
  env: Env,
  ast: AST.BinaryExpression,
  assume: boolean
): Env {
  if (!AST.isExpression(ast.left)) bug(`unimplemented ${ast.left.type}`);
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);
  if (ast.operator === '===' && assume || ast.operator === '!==' && !assume) {
    env = narrowPath(env, ast.left, right);
    return narrowPath(env, ast.right, left);
  } else if (ast.operator === '!==' && assume || ast.operator === '===' && !assume) {
    env = narrowPath(env, ast.left, Type.not(right));
    return narrowPath(env, ast.right, Type.not(left));
  } else return env;
}
);

// narrow environment under the assumption that `ast` is truthy / falsy
export const narrow = Trace.instrument('narrow',
function narrow(
  env: Env,
  ast: AST.Expression,
  assume: boolean
): Env {
  switch (ast.type) {
    case 'UnaryExpression':
      return narrowUnary(env, ast, assume);

    case 'LogicalExpression':
      return narrowLogical(env, ast, assume);

    case 'BinaryExpression':
      return narrowBinary(env, ast, assume);

    default:
      if (assume) {
        return narrowPath(env, ast, Type.truthy);
      } else {
        return narrowPath(env, ast, Type.falsy);
      }
  }
}
);

export default narrow;
