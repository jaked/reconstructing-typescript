import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug, err } from "../util/err.js";
import * as Trace from "../util/trace.js";
import Type from "../type/index.js";
import synth from "./synth.js";
import narrow from "./narrow.js";
const checkObject = Trace.instrument("checkObject", function checkObject2(env, ast, type) {
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
});
const checkFunction = Trace.instrument("checkFunction", function checkFunction2(env, ast, type) {
  if (!AST.isExpression(ast.body)) bug(`unimplemented ${ast.body.type}`);
  if (type.args.length != ast.params.length) err(`expected ${type.args.length} args, got ${ast.params.length} args`, ast);
  const bindings = ast.params.map((param, i) => {
    if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
    return {
      name: param.name,
      type: type.args[i]
    };
  });
  const bodyEnv = bindings.reduce((env2, {
    name,
    type: type2
  }) => env2.set(name, type2), env);
  check(bodyEnv, ast.body, type.ret);
});
const checkConditional = Trace.instrument("checkConditional", function checkConditional2(env, ast, type) {
  const test = synth(env, ast.test);

  const consequent = () => check(narrow(env, ast.test, true), ast.consequent, type);

  const alternate = () => check(narrow(env, ast.test, false), ast.alternate, type);

  if (Type.isTruthy(test)) {
    consequent();
  } else if (Type.isFalsy(test)) {
    alternate();
  } else {
    consequent();
    alternate();
  }
});
const check = Trace.instrument("check", function (env, ast, type) {
  if (Type.isIntersection(type)) return type.types.forEach(type2 => check(env, ast, type2));
  if (AST.isObjectExpression(ast) && Type.isObject(type)) return checkObject(env, ast, type);
  if (AST.isArrowFunctionExpression(ast) && Type.isFunction(type)) return checkFunction(env, ast, type);
  if (AST.isConditionalExpression(ast)) return checkConditional(env, ast, type);
  const synthType = synth(env, ast);
  if (!Type.isSubtype(synthType, type)) err(`expected ${Type.toString(type)}, got ${Type.toString(synthType)}`, ast);
});
export default check;