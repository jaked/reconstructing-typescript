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
    if (Type.isSubtype(x, y.base)) {
      return Type.never;
    } else if (Type.isBoolean(x) && Type.isSingleton(y.base) && Type.isBoolean(y.base.base)) {
      return Type.singleton(!y.base.value);
    } else {
      return x;
    }
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

  return Type.intersection(x, y);
});
const narrowPathIdentifier = Trace.instrument("narrowPathIdentifier", function narrowPathIdentifier2(env, ast, type) {
  const ident = env.get(ast.name);
  if (!ident) bug("expected bound identifer");
  return env.set(ast.name, narrowType(ident, type));
});
const narrowPathMember = Trace.instrument("narrowPathMember", function narrowPathMember2(env, ast, type) {
  if (ast.computed) bug(`unimplemented computed`);
  if (!AST.isIdentifier(ast.property)) bug(`unexpected ${ast.property.type}`);
  return narrowPath(env, ast.object, Type.object({
    [ast.property.name]: type
  }));
});
const narrowPathUnary = Trace.instrument("narrowPathUnary", function narrowPathUnary2(env, ast, type) {
  switch (ast.operator) {
    case "!":
      return env;

    case "typeof":
      if (Type.isSingleton(type)) {
        switch (type.value) {
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
      } else if (Type.isNot(type) && Type.isSingleton(type.base)) {
        switch (type.base.value) {
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
const narrowPath = Trace.instrument("narrowPath", function narrowPath2(env, ast, type) {
  switch (ast.type) {
    case "Identifier":
      return narrowPathIdentifier(env, ast, type);

    case "MemberExpression":
      return narrowPathMember(env, ast, type);

    case "UnaryExpression":
      return narrowPathUnary(env, ast, type);

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
    if (Type.isSingleton(right)) env = narrowPath(env, ast.left, Type.not(right));
    if (Type.isSingleton(left)) env = narrowPath(env, ast.right, Type.not(left));
    return env;
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
      return narrowPath(env, ast, assume ? Type.truthy : Type.falsy);
  }
});
export default narrow;