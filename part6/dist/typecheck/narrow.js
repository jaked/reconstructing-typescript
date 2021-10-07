import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug } from "../util/err.js";
import Type from "../type/index.js";
import synth from "./synth.js";
export function narrowType(a, b) {
  if (Type.isNever(a) || Type.isNever(b)) return Type.never;
  if (Type.isUnknown(a)) return b;
  if (Type.isUnknown(b)) return a;
  if (Type.isNull(a) && Type.isNull(b)) return a;
  if (Type.isBoolean(a) && Type.isBoolean(b)) return a;
  if (Type.isNumber(a) && Type.isNumber(b)) return a;
  if (Type.isString(a) && Type.isString(b)) return a;
  if (Type.isUnion(a)) return Type.union(...a.types.map(a2 => narrowType(a2, b)));
  if (Type.isUnion(b)) return Type.union(...b.types.map(b2 => narrowType(a, b2)));
  if (Type.isIntersection(a)) return Type.intersection(...a.types.map(a2 => narrowType(a2, b)));
  if (Type.isIntersection(b)) return Type.intersection(...b.types.map(b2 => narrowType(a, b2)));

  if (Type.isNot(b)) {
    if (Type.isSubtype(a, b.base) && Type.isSubtype(b.base, a)) return Type.never;else if (Type.isBoolean(a) && Type.isSingleton(b.base) && Type.isBoolean(b.base.base)) {
      if (b.base.value === true) return Type.singleton(false);else return Type.singleton(true);
    } else return a;
  }

  if (Type.isSingleton(a) && Type.isSingleton(b)) return a.value === b.value ? a : Type.never;
  if (Type.isSingleton(a)) return a.base.type === b.type ? a : Type.never;
  if (Type.isSingleton(b)) return b.base.type === a.type ? b : Type.never;

  if (Type.isObject(a) && Type.isObject(b)) {
    const properties = a.properties.map(({
      name,
      type: aType
    }) => {
      const bType = Type.propType(b, name);
      const type = bType ? narrowType(aType, bType) : aType;
      return {
        name,
        type
      };
    }, {});
    if (properties.some(({
      type
    }) => Type.isNever(type))) return Type.never;else return Type.object(properties);
  }

  return Type.never;
}

function narrowPathIdentifier(env, ast, otherType) {
  const identType = env.get(ast.name);
  if (!identType) bug("expected bound identifer");
  const type = narrowType(identType, otherType);
  return env.set(ast.name, type);
}

function narrowPathMember(env, ast, otherType) {
  if (ast.computed) bug(`unimplemented computed`);
  if (!AST.isIdentifier(ast.property)) bug(`unexpected ${ast.property.type}`);
  return narrowPath(env, ast.object, Type.object({
    [ast.property.name]: otherType
  }));
}

function narrowPathUnary(env, ast, otherType) {
  switch (ast.operator) {
    case "!":
      return env;

    case "typeof":
      if (Type.isSingleton(otherType)) {
        switch (otherType.value) {
          case "boolean":
            return narrowPath(env, ast.argument, Type.boolean);

          case "number":
            return narrowPath(env, ast.argument, Type.number);

          case "string":
            return narrowPath(env, ast.argument, Type.string);

          case "object":
            return narrowPath(env, ast.argument, Type.object({}));

          default:
            return env;
        }
      } else if (Type.isNot(otherType) && Type.isSingleton(otherType.base)) {
        switch (otherType.base.value) {
          case "boolean":
            return narrowPath(env, ast.argument, Type.not(Type.boolean));

          case "number":
            return narrowPath(env, ast.argument, Type.not(Type.number));

          case "string":
            return narrowPath(env, ast.argument, Type.not(Type.string));

          case "object":
            return narrowPath(env, ast.argument, Type.not(Type.object({})));

          default:
            return env;
        }
      } else return env;

    default:
      bug(`unexpected ${ast.operator}`);
  }
}

function narrowPath(env, ast, otherType) {
  switch (ast.type) {
    case "Identifier":
      return narrowPathIdentifier(env, ast, otherType);

    case "MemberExpression":
      return narrowPathMember(env, ast, otherType);

    case "UnaryExpression":
      return narrowPathUnary(env, ast, otherType);

    default:
      return env;
  }
}

function narrowUnary(env, ast, assume) {
  switch (ast.operator) {
    case "!":
      return narrow(env, ast.argument, !assume);

    case "typeof":
      return env;

    default:
      bug(`unexpected ${ast.operator}`);
  }
}

function narrowLogical(env, ast, assume) {
  switch (ast.operator) {
    case "&&":
      if (assume) {
        env = narrow(env, ast.left, true);
        return narrow(env, ast.right, true);
      } else {
        if (Type.isTruthy(synth(env, ast.left))) return narrow(env, ast.right, false);else if (Type.isTruthy(synth(env, ast.right))) return narrow(env, ast.left, false);else return env;
      }

    case "||":
      if (!assume) {
        env = narrow(env, ast.left, false);
        return narrow(env, ast.right, false);
      } else {
        if (Type.isFalsy(synth(env, ast.left))) return narrow(env, ast.right, true);else if (Type.isFalsy(synth(env, ast.right))) return narrow(env, ast.left, true);else return env;
      }

    default:
      bug(`unexpected AST ${ast.operator}`);
  }
}

function narrowBinary(env, ast, assume) {
  if (!AST.isExpression(ast.left)) bug(`unimplemented ${ast.left.type}`);
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);

  if (ast.operator === "===" && assume || ast.operator === "!==" && !assume) {
    env = narrowPath(env, ast.left, right);
    return narrowPath(env, ast.right, left);
  } else if (ast.operator === "!==" && assume || ast.operator === "===" && !assume) {
    env = narrowPath(env, ast.left, Type.not(right));
    return narrowPath(env, ast.right, Type.not(left));
  } else return env;
}

export function narrow(env, ast, assume) {
  switch (ast.type) {
    case "UnaryExpression":
      return narrowUnary(env, ast, assume);

    case "LogicalExpression":
      return narrowLogical(env, ast, assume);

    case "BinaryExpression":
      return narrowBinary(env, ast, assume);

    default:
      if (assume) {
        return narrowPath(env, ast, Type.truthy);
      } else {
        return narrowPath(env, ast, Type.falsy);
      }

  }
}
export default narrow;