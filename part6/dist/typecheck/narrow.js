import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug } from "../util/err.js";
import * as Trace from "../util/trace.js";
import Type from "../type/index.js";
import synth from "./synth.js";

function widenNots(type) {
  switch (type.type) {
    case "Not":
      return Type.unknown;

    case "Union":
      return Type.union(...type.types.map(widenNots));

    case "Intersection":
      return Type.intersection(...type.types.map(widenNots));

    case "Object":
      return Type.object(type.properties.map(({
        name,
        type: type2
      }) => ({
        name,
        type: widenNots(type2)
      })));

    default:
      return type;
  }
}

export const narrowType = Trace.instrument("narrowType", function (x, y) {
  if (Type.isNever(x) || Type.isNever(y)) return Type.never;
  if (Type.isUnknown(x)) return widenNots(y);
  if (Type.isUnknown(y)) return x;
  if (Type.isUnion(x)) return Type.union(...x.types.map(a => narrowType(a, y)));
  if (Type.isUnion(y)) return Type.union(...y.types.map(b => narrowType(x, b)));
  if (Type.isIntersection(x)) return Type.intersection(...x.types.map(a => narrowType(a, y)));
  if (Type.isIntersection(y)) return Type.intersection(...y.types.map(b => narrowType(x, b)));

  if (Type.isNot(y)) {
    if (Type.isSubtype(x, y.base) && Type.isSubtype(y.base, x)) return Type.never;else if (Type.isBoolean(x) && Type.isSingleton(y.base) && Type.isBoolean(y.base.base)) {
      if (y.base.value === true) return Type.singleton(false);else return Type.singleton(true);
    } else return x;
  }

  if (Type.isSingleton(x) && Type.isSingleton(y)) return x.value === y.value ? x : Type.never;
  if (Type.isSingleton(x)) return x.base.type === y.type ? x : Type.never;
  if (Type.isSingleton(y)) return y.base.type === x.type ? y : Type.never;

  if (Type.isObject(x) && Type.isObject(y)) {
    const properties = x.properties.map(({
      name,
      type: xType
    }) => {
      const yType = Type.propType(y, name);
      const type = yType ? narrowType(xType, yType) : xType;
      return {
        name,
        type
      };
    }, {});
    if (properties.some(({
      type
    }) => Type.isNever(type))) return Type.never;else return Type.object(properties);
  }

  return x.type === y.type ? x : Type.never;
});
const narrowPathIdentifier = Trace.instrument("narrowPathIdentifier", function narrowPathIdentifier2(env, ast, otherType) {
  const identType = env.get(ast.name);
  if (!identType) bug("expected bound identifer");
  const type = narrowType(identType, otherType);
  return env.set(ast.name, type);
});
const narrowPathMember = Trace.instrument("narrowPathMember", function narrowPathMember2(env, ast, otherType) {
  if (ast.computed) bug(`unimplemented computed`);
  if (!AST.isIdentifier(ast.property)) bug(`unexpected ${ast.property.type}`);
  return narrowPath(env, ast.object, Type.object({
    [ast.property.name]: otherType
  }));
});
const narrowPathUnary = Trace.instrument("narrowPathUnary", function narrowPathUnary2(env, ast, otherType) {
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
});
const narrowPath = Trace.instrument("narrowPath", function narrowPath2(env, ast, otherType) {
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
});
const narrowUnary = Trace.instrument("narrowUnary", function narrowUnary2(env, ast, assume) {
  switch (ast.operator) {
    case "!":
      return narrow(env, ast.argument, !assume);

    case "typeof":
      return env;

    default:
      bug(`unexpected ${ast.operator}`);
  }
});
const narrowLogical = Trace.instrument("narrowLogical", function narrowLogical2(env, ast, assume) {
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
});
const narrowBinary = Trace.instrument("narrowBinary", function narrowBinary2(env, ast, assume) {
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
});
export const narrow = Trace.instrument("narrow", function narrow2(env, ast, assume) {
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
});
export default narrow;