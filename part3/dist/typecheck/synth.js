import { bug, err } from "../util/err.js";
import Type from "../type/index.js";
import check from "./check.js";

function synthIdentifier(env, ast) {
  const type = env.get(ast.name);
  if (!type) err(`unbound identifier '${ast.name}'`, ast);
  return type;
}

function synthNull(env, ast) {
  return Type.nullType;
}

function synthBoolean(env, ast) {
  return Type.singleton(ast.value);
}

function synthNumber(env, ast) {
  return Type.singleton(ast.value);
}

function synthString(env, ast) {
  return Type.singleton(ast.value);
}

function synthObject(env, ast) {
  const properties = ast.properties.map(prop => {
    if (prop.type !== "ObjectProperty") bug(`unimplemented ${prop.type}`);
    if (prop.computed) bug(`unimplemented computed`);
    if (prop.key.type !== "Identifier") bug(`unimplemented ${prop.key.type}`);
    return {
      name: prop.key.name,
      type: synth(env, prop.value)
    };
  });
  return Type.object(properties);
}

function synthMember(env, ast) {
  if (ast.computed) bug(`unimplemented computed`);
  const prop = ast.property;
  if (prop.type !== "Identifier") bug(`unimplemented ${prop.type}`);
  const object = synth(env, ast.object);
  if (object.type !== "Object") err(". expects object", ast.object);
  const typeProp = object.properties.find(({
    name: typeName
  }) => typeName === prop.name);
  if (!typeProp) err(`no such property ${prop.name}`, prop);
  return typeProp.type;
}

function synthTSAs(env, ast) {
  const type = Type.ofTSType(ast.typeAnnotation);
  check(env, ast.expression, type);
  return type;
}

function synthFunction(env, ast) {
  const argTypes = ast.params.map(param => {
    if (param.type !== "Identifier") bug(`unimplemented ${param.type}`);
    if (!param.typeAnnotation) err(`type required for '${param.name}'`, param);
    if (param.typeAnnotation.type !== "TSTypeAnnotation") bug(`unimplemented ${param.type}`);
    return {
      name: param.name,
      type: Type.ofTSType(param.typeAnnotation.typeAnnotation)
    };
  });
  const args = argTypes.map(({
    name,
    type
  }) => type);
  const bodyEnv = argTypes.reduce((env2, {
    name,
    type
  }) => env2.set(name, type), env);
  const ret = synth(bodyEnv, ast.body);
  return Type.functionType(args, ret);
}

function synthCall(env, ast) {
  const callee = synth(env, ast.callee);
  if (callee.type !== "Function") err(`call expects function`, ast.callee);
  if (callee.args.length !== ast.arguments.length) err(`expected ${callee.args.length} args, got ${ast.arguments.length} args`, ast);
  callee.args.forEach((arg, i) => {
    check(env, ast.arguments[i], arg);
  });
  return callee.ret;
}

function synthBinary(env, ast) {
  if (ast.operator !== "+") bug(`unimplemented ${ast.operator}`);
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);

  if (left.type === "Singleton" && right.type === "Singleton") {
    if (left.base.type === "Number" && right.base.type === "Number") {
      if (typeof left.value !== "number" || typeof right.value !== "number") bug("unexpected value");
      return Type.singleton(left.value + right.value);
    } else {
      err("+ expects numbers", ast);
    }
  } else {
    if (Type.isSubtype(left, Type.number) && Type.isSubtype(right, Type.number)) return Type.number;else err("+ expects numbers", ast);
  }
}

function synthLogical(env, ast) {
  if (ast.operator !== "&&") bug(`unimplemented ${ast.operator}`);
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);
  if (Type.isFalsy(left)) return left;else if (Type.isTruthy(left)) return right;else return Type.boolean;
}

function synthUnary(env, ast) {
  if (ast.operator !== "!") bug(`unimplemented ${ast.operator}`);
  const argument = synth(env, ast.argument);
  if (Type.isTruthy(argument)) return Type.singleton(false);else if (Type.isFalsy(argument)) return Type.singleton(true);else return Type.boolean;
}

export default function synth(env, ast) {
  switch (ast.type) {
    case "Identifier":
      return synthIdentifier(env, ast);

    case "NullLiteral":
      return synthNull(env, ast);

    case "BooleanLiteral":
      return synthBoolean(env, ast);

    case "NumericLiteral":
      return synthNumber(env, ast);

    case "StringLiteral":
      return synthString(env, ast);

    case "ObjectExpression":
      return synthObject(env, ast);

    case "MemberExpression":
      return synthMember(env, ast);

    case "TSAsExpression":
      return synthTSAs(env, ast);

    case "ArrowFunctionExpression":
      return synthFunction(env, ast);

    case "CallExpression":
      return synthCall(env, ast);

    case "BinaryExpression":
      return synthBinary(env, ast);

    case "LogicalExpression":
      return synthLogical(env, ast);

    case "UnaryExpression":
      return synthUnary(env, ast);

    default:
      bug(`unimplemented ${ast.type}`);
  }
}