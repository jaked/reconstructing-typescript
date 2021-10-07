import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug, err } from "../util/err.js";
import * as Trace from "../util/trace.js";
import Type from "../type/index.js";
import check from "./check.js";
const synthIdentifier = Trace.instrument("synthIdentifier", function synthIdentifier2(env, ast) {
  const type = env.get(ast.name);
  if (!type) err(`unbound identifier '${ast.name}'`, ast);
  return type;
});
const synthNull = Trace.instrument("synthNull", function synthNull2(env, ast) {
  return Type.nullType;
});
const synthBoolean = Trace.instrument("synthBoolean", function synthBoolean2(env, ast) {
  return Type.boolean;
});
const synthNumber = Trace.instrument("synthNumber", function (env, ast) {
  return Type.number;
});
const synthString = Trace.instrument("synthString", function synthString2(env, ast) {
  return Type.string;
});
const synthObject = Trace.instrument("synthObject", function synthObject2(env, ast) {
  const properties = ast.properties.map(prop => {
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
});
const synthMember = Trace.instrument("synthMember", function synthMember2(env, ast) {
  const prop = ast.property;
  if (!AST.isIdentifier(prop)) bug(`unimplemented ${prop.type}`);
  if (ast.computed) bug(`unimplemented computed`);
  const object = synth(env, ast.object);
  if (!Type.isObject(object)) err(". expects object", ast.object);
  const type = Type.propType(object, prop.name);
  if (!type) err(`no such property ${prop.name}`, prop);
  return type;
});
const synthTSAs = Trace.instrument("synthTSAs", function synthTSAs2(env, ast) {
  const type = Type.ofTSType(ast.typeAnnotation);
  check(env, ast.expression, type);
  return type;
});
const synthFunction = Trace.instrument("synthFunction", function synthFunction2(env, ast) {
  if (!AST.isExpression(ast.body)) bug(`unimplemented ${ast.body.type}`);
  const bindings = ast.params.map(param => {
    if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
    if (!param.typeAnnotation) err(`type required for '${param.name}'`, param);
    if (!AST.isTSTypeAnnotation(param.typeAnnotation)) bug(`unimplemented ${param.type}`);
    return {
      name: param.name,
      type: Type.ofTSType(param.typeAnnotation.typeAnnotation)
    };
  });
  const args = bindings.map(({
    type
  }) => type);
  const bodyEnv = bindings.reduce((env2, {
    name,
    type
  }) => env2.set(name, type), env);
  const ret = synth(bodyEnv, ast.body);
  return Type.functionType(args, ret);
});
const synthCall = Trace.instrument("synthCall", function synthCall2(env, ast) {
  if (!AST.isExpression(ast.callee)) bug(`unimplemented ${ast.callee.type}`);
  const callee = synth(env, ast.callee);
  if (!Type.isFunction(callee)) err(`call expects function`, ast.callee);
  if (callee.args.length !== ast.arguments.length) err(`expected ${callee.args.length} args, got ${ast.arguments.length} args`, ast);
  callee.args.forEach((type, i) => {
    const arg = ast.arguments[i];
    if (!AST.isExpression(arg)) bug(`unimplemented ${arg.type}`);
    check(env, arg, type);
  });
  return callee.ret;
});
const synth = Trace.instrument("synth", function synth2(env, ast) {
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

    default:
      bug(`unimplemented ${ast.type}`);
  }
});
export default synth;