import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug, err } from "../util/err.js";
import Type from "../type/index.js";
import synth from "./synth.js";

function checkObject(ast, type) {
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
    if (propType) check(expr, propType);else err(`extra property ${name}`, key);
  });
}

export default function check(ast, type) {
  if (AST.isObjectExpression(ast) && Type.isObject(type)) return checkObject(ast, type);
  const synthType = synth(ast);
  if (!Type.isSubtype(synthType, type)) err(`expected ${Type.toString(type)}, got ${Type.toString(synthType)}`, ast);
}