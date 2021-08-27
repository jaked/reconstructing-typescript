import { bug, err } from "../util/err.js";
import Type from "../type/index.js";
import synth from "./synth.js";

function checkObject(env, ast, type) {
  const astProps = ast.properties.map(prop => {
    if (prop.type !== "ObjectProperty") bug(`unimplemented ${prop.type}`);
    if (prop.computed) bug(`unimplemented computed`);
    if (prop.key.type !== "Identifier") bug(`unimplemented ${prop.key.type}`);
    return {
      name: prop.key.name,
      expr: prop.value,
      key: prop.key
    };
  });
  type.properties.forEach(({
    name
  }) => {
    const astProp = astProps.find(({
      name: astName
    }) => astName === name);
    if (!astProp) err(`missing property ${name}`, ast);
  });
  astProps.forEach(({
    name,
    expr,
    key
  }) => {
    const prop = type.properties.find(({
      name: propName
    }) => propName === name);
    if (prop) check(env, expr, prop.type);
  });
}

function checkFunction(env, ast, type) {
  if (type.args.length != ast.params.length) err(`expected ${type.args.length} args, got ${ast.params.length} args`, ast);
  const params = ast.params.map(param => {
    if (param.type !== "Identifier") bug(`unimplemented ${param.type}`);
    return param.name;
  });
  const bodyEnv = params.reduce((env2, param, i) => env2.set(param, type.args[i]), env);
  check(bodyEnv, ast.body, type.ret);
}

export default function check(env, ast, type) {
  if (type.type === "Intersection") return type.types.forEach(type2 => check(env, ast, type2));
  if (ast.type === "ObjectExpression" && type.type === "Object") return checkObject(env, ast, type);
  if (ast.type === "ArrowFunctionExpression" && type.type === "Function") return checkFunction(env, ast, type);
  const synthType = synth(env, ast);
  if (!Type.isSubtype(synthType, type)) err(`expected ${Type.toString(type)}, got ${Type.toString(synthType)}`, ast);
}