import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug, err } from "../util/err.js";
import Type from "../type/index.js";
import synth from "./synth.js";

function checkObject(env, ast, type) {
  const astProps = ast.properties.map(prop => {
    if (!AST.isObjectProperty(prop)) bug(`unimplemented ${prop.type}`);
    if (prop.computed) bug(`unimplemented computed`);
    if (!AST.isIdentifier(prop.key)) bug(`unimplemented ${prop.key.type}`);
    if (!AST.isExpression(prop.value)) bug(`unimplemented ${prop.value.type}`);
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
    const propType = Type.propType(type, name);
    if (propType) check(env, expr, propType);
  });
}

function checkFunction(env, ast, type) {
  if (!AST.isExpression(ast.body)) bug(`unimplemented ${ast.body.type}`);
  if (type.args.length != ast.params.length) err(`expected ${type.args.length} args, got ${ast.params.length} args`, ast);
  const params = ast.params.map(param => {
    if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
    return param.name;
  });
  const bodyEnv = params.reduce((env2, param, i) => env2.set(param, type.args[i]), env);
  check(bodyEnv, ast.body, type.ret);
}

export default function check(env, ast, type) {
  if (Type.isIntersection(type)) return type.types.forEach(type2 => check(env, ast, type2));
  if (AST.isObjectExpression(ast) && Type.isObject(type)) return checkObject(env, ast, type);
  if (AST.isArrowFunctionExpression(ast) && Type.isFunction(type)) return checkFunction(env, ast, type);
  const synthType = synth(env, ast);
  if (!Type.isSubtype(synthType, type)) err(`expected ${Type.toString(type)}, got ${Type.toString(synthType)}`, ast);
}