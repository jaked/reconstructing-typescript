import {bug, err} from "../util/err.js";
import Type from "../type/index.js";
import synth from "./synth.js";
function checkObject(ast, type) {
  const astProps = ast.properties.map((prop) => {
    if (prop.type !== "ObjectProperty")
      bug(`unimplemented ${prop.type}`);
    if (prop.computed)
      bug(`unimplemented computed`);
    if (prop.key.type !== "Identifier")
      bug(`unimplemented ${prop.key.type}`);
    return {
      name: prop.key.name,
      expr: prop.value,
      key: prop.key
    };
  });
  type.properties.forEach(({name}) => {
    const astProp = astProps.find(({name: astName}) => astName === name);
    if (!astProp)
      err(`missing property ${name}`, ast);
  });
  astProps.forEach(({name, expr, key}) => {
    const prop = type.properties.find(({name: propName}) => propName === name);
    if (prop)
      check(expr, prop.type);
    else
      err(`extra property ${name}`, key);
  });
}
export default function check(ast, type) {
  if (ast.type === "ObjectExpression" && type.type === "Object")
    return checkObject(ast, type);
  const synthType = synth(ast);
  if (!Type.isSubtype(synthType, type))
    err(`expected ${Type.toString(type)}, got ${Type.toString(synthType)}`, ast);
}
