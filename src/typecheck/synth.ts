import * as AST from '@babel/types';
import { bug, err } from '../util/err';
import * as Trace from '../util/trace';
import Type from '../type';
import check from './check';
import Env from './env';

const synthIdentifier = Trace.instrument('synthIdentifier',
function synthIdentifier(env: Env, ast: AST.Identifier): Type {
  const type = env.get(ast.name);
  if (!type) err(`unbound identifier '${ast.name}'`, ast);
  return type;
}
);

const synthNull = Trace.instrument('synthNull',
function synthNull(env: Env, ast: AST.NullLiteral): Type {
  return Type.nullType;
}
);

const synthBoolean = Trace.instrument('synthBoolean',
function synthBoolean(env: Env, ast: AST.BooleanLiteral): Type {
  return Type.singleton(ast.value);
}
);

const synthNumber = Trace.instrument('synthNumber',
function synthNumber(env: Env, ast: AST.NumericLiteral): Type {
  return Type.singleton(ast.value);
}
);

const synthString = Trace.instrument('synthString',
function synthString(env: Env, ast: AST.StringLiteral): Type {
  return Type.singleton(ast.value);
}
);

const synthObject = Trace.instrument('synthObject',
function synthObject(env: Env, ast: AST.ObjectExpression): Type {
  const properties =
    ast.properties.map(prop => {
      if (!AST.isObjectProperty(prop)) bug(`unimplemented ${prop.type}`);
      if (!AST.isIdentifier(prop.key)) bug(`unimplemented ${prop.key.type}`);
      if (!AST.isExpression(prop.value)) bug(`unimplemented ${prop.value.type}`);
      if (prop.computed) bug(`unimplemented computed`);
      return {
        name: prop.key.name,
        type: synth(env, prop.value)
      };
    });
  return Type.object(properties);
}
);

const synthMember = Trace.instrument('synthMember',
function synthMember(env: Env, ast: AST.MemberExpression): Type {
  const prop = ast.property;
  if (!AST.isIdentifier(prop)) bug(`unimplemented ${prop.type}`);
  if (ast.computed) bug(`unimplemented computed`);
  return synthAndThen(env, ast.object, object => {
    if (!Type.isObject(object)) err('. expects object', ast.object);
    const type = Type.propType(object, prop.name);
    if (!type) err(`no such property ${prop.name}`, prop);
    return type;
  });
}
);

const synthTSAs = Trace.instrument('synthTSAs',
function synthTSAs(env: Env, ast: AST.TSAsExpression): Type {
  const type = Type.ofTSType(ast.typeAnnotation);
  check(env, ast.expression, type);
  return type;
}
);

const synthFunction = Trace.instrument('synthFunction',
function synthFunction(env: Env, ast: AST.ArrowFunctionExpression): Type {
  if (!AST.isExpression(ast.body)) bug(`unimplemented ${ast.body.type}`)
  const bindings = ast.params.map(param => {
    if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
    if (!param.typeAnnotation) err(`type required for '${param.name}'`, param);
    if (!AST.isTSTypeAnnotation(param.typeAnnotation)) bug(`unimplemented ${param.type}`);
    return {
      name: param.name,
      type: Type.ofTSType(param.typeAnnotation.typeAnnotation),
    };
  });
  const args = bindings.map(({ type }) => type);
  const bodyEnv =
    bindings.reduce(
      (env, { name, type }) => env.set(name, type),
      env
    );
  const ret = synth(bodyEnv, ast.body);
  return Type.functionType(args, ret);
}
);

const synthCall = Trace.instrument('synthCall',
function synthCall(env: Env, ast: AST.CallExpression): Type {
  if (!AST.isExpression(ast.callee)) bug(`unimplemented ${ast.callee.type}`);
  return synthAndThen(env, ast.callee, callee => {
    if (!Type.isFunction(callee)) err(`call expects function`, ast.callee);
    if (callee.args.length !== ast.arguments.length)
      err(`expected ${callee.args.length} args, got ${ast.arguments.length} args`, ast);
      callee.args.forEach((type, i) => {
        const arg = ast.arguments[i];
        if (!AST.isExpression(arg)) bug(`unimplemented ${arg.type}`)
        check(env, arg, type);
      });
    return callee.ret
  });
}
);

const synthBinary = Trace.instrument('synthBinary',
function synthBinary(env: Env, ast: AST.BinaryExpression): Type {
  if (!AST.isExpression(ast.left)) bug(`unimplemented ${ast.left.type}`)
  return synthAndThen(env, ast.left, left => {
    return synthAndThen(env, ast.right, right => {
      switch (ast.operator) {
        case '===':
          if (Type.isSingleton(left) && Type.isSingleton(right))
            return Type.singleton(left.value === right.value);
          else
            return Type.boolean;

        case '!==':
          if (Type.isSingleton(left) && Type.isSingleton(right))
            return Type.singleton(left.value !== right.value);
          else
            return Type.boolean;

        case '+':
          if (Type.isSubtype(left, Type.number) && Type.isSubtype(right, Type.number)) {
            if (Type.isSingleton(left) && Type.isSingleton(right)) {
              if (typeof left.value !== 'number' || typeof right.value !== 'number')
                bug('unexpected value');
              return Type.singleton(left.value + right.value);
            } else {
              return Type.number;
            }
          } else {
            err('+ expects numbers', ast);
          }

        default: bug(`unimplemented ${ast.operator}`);
      }
    });
  });
}
);

const synthLogical = Trace.instrument('synthLogical',
function synthLogical(env: Env, ast: AST.LogicalExpression): Type {
  return synthAndThen(env, ast.left, left => {
    return synthAndThen(env, ast.right, right => {
      switch (ast.operator) {
        case '&&':
          if (Type.isFalsy(left))
            return left;
          else if (Type.isTruthy(left))
            return right;
          else
            return Type.union(left, right);

        case '||':
          if (Type.isTruthy(left))
            return left;
          else if (Type.isFalsy(left))
            return right;
          else
            return Type.union(left, right);

        default: bug(`unimplemented ${ast.operator}`);
      }
    });
  });
}
);

function typeofType(type: Type): string {
  switch (type.type) {
    case 'Singleton': return typeofType(type.base);
    case 'Boolean': return 'boolean';
    case 'Function': return 'function';
    case 'Null': return 'object';
    case 'Number': return 'number';
    case 'Object': return 'object';
    case 'String': return 'string';
    default: bug(`unexpected ${type.type}`);
  }
}

const synthUnary = Trace.instrument('synthUnary',
function synthUnary(env: Env, ast: AST.UnaryExpression): Type {
  return synthAndThen(env, ast.argument, argument => {
    switch (ast.operator) {
      case '!':
        if (Type.isTruthy(argument))
          return Type.singleton(false);
        else if (Type.isFalsy(argument))
          return Type.singleton(true);
        else
          return Type.boolean;

      case 'typeof':
        return Type.singleton(typeofType(argument));

      default: bug(`unimplemented ${ast.operator}`);
    }
  });
}
);

function synthAndThen(env: Env, ast: AST.Expression, fn: (t: Type) => Type) {
  const type = synth(env, ast);
  if (Type.isUnion(type))
    return Type.union(...type.types.map(fn));
  else
    return fn(type);
}

const synth = Trace.instrument('synth',
function synth(env: Env, ast: AST.Expression): Type {
  switch (ast.type) {
    case 'Identifier':              return synthIdentifier(env, ast);
    case 'NullLiteral':             return synthNull(env, ast);
    case 'BooleanLiteral':          return synthBoolean(env, ast);
    case 'NumericLiteral':          return synthNumber(env, ast);
    case 'StringLiteral':           return synthString(env, ast);
    case 'ObjectExpression':        return synthObject(env, ast);
    case 'MemberExpression':        return synthMember(env, ast);
    case 'TSAsExpression':          return synthTSAs(env, ast);
    case 'ArrowFunctionExpression': return synthFunction(env, ast);
    case 'CallExpression':          return synthCall(env, ast);
    case 'BinaryExpression':        return synthBinary(env, ast);
    case 'LogicalExpression':       return synthLogical(env, ast);
    case 'UnaryExpression':         return synthUnary(env, ast);

    default: bug(`unimplemented ${ast.type}`);
  }
}
);

export default synth
