import { bug } from "../util/err.js";
import Type from "../type/index.js";
import synth from "./synth.js";
export function narrowType(a, b) {
  if (a.type === "Never" || b.type === "Never") return Type.never;
  if (a.type === "Unknown") return b;
  if (b.type === "Unknown") return a;
  if (a.type === "Null" && b.type === "Null") return a;
  if (a.type === "Boolean" && b.type === "Boolean") return a;
  if (a.type === "Number" && b.type === "Number") return a;
  if (a.type === "String" && b.type === "String") return a;
  if (a.type === "Union") return Type.union(...a.types.map(a2 => narrowType(a2, b)));
  if (b.type === "Union") return Type.union(...b.types.map(b2 => narrowType(a, b2)));
  if (a.type === "Intersection") return Type.intersection(...a.types.map(a2 => narrowType(a2, b)));
  if (b.type === "Intersection") return Type.intersection(...b.types.map(b2 => narrowType(a, b2)));

  if (b.type === "Not") {
    if (Type.equiv(a, b.base)) return Type.never;else if (a.type === "Boolean" && b.base.type === "Singleton" && b.base.base.type == "Boolean") {
      if (b.base.value === true) return Type.singleton(false);else return Type.singleton(true);
    } else return a;
  }

  if (a.type === "Singleton" && b.type === "Singleton") return a.value === b.value ? a : Type.never;
  if (a.type === "Singleton") return a.base.type === b.type ? a : Type.never;
  if (b.type === "Singleton") return b.base.type === a.type ? b : Type.never;

  if (a.type === "Object" && b.type === "Object") {
    const properties = a.properties.map(({
      name,
      type: aType
    }) => {
      const bProp = b.properties.find(({
        name: bName
      }) => bName === name);
      const type = bProp ? narrowType(aType, bProp.type) : aType;
      return {
        name,
        type
      };
    }, {});
    if (properties.some(({
      type
    }) => type.type === "Never")) return Type.never;else return Type.object(properties);
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
  if (ast.property.type !== "Identifier") bug(`unexpected ${ast.property.type}`);
  return narrowPath(env, ast.object, Type.object({
    [ast.property.name]: otherType
  }));
}

function narrowPathUnary(env, ast, otherType) {
  switch (ast.operator) {
    case "!":
      return env;

    case "typeof":
      if (otherType.type === "Singleton") {
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
      } else if (otherType.type === "Not" && otherType.base.type === "Singleton") {
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