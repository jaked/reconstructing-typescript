import {bug, err} from "../util/err.js";
import Type from "../type/index.js";
function synthNull(ast) {
  return Type.nullType;
}
function synthBoolean(ast) {
  return Type.boolean;
}
function synthNumber(ast) {
  return Type.number;
}
function synthString(ast) {
  return Type.string;
}
function synthObject(ast) {
  const properties = ast.properties.map((prop) => {
    if (prop.type !== "ObjectProperty")
      bug(`unimplemented ${prop.type}`);
    if (prop.computed)
      bug(`unimplemented computed`);
    if (prop.key.type !== "Identifier")
      bug(`unimplemented ${prop.key.type}`);
    return {
      name: prop.key.name,
      type: synth(prop.value)
    };
  });
  return Type.object(properties);
}
function synthMember(ast) {
  if (ast.computed)
    bug(`unimplemented computed`);
  const prop = ast.property;
  if (prop.type !== "Identifier")
    bug(`unimplemented ${prop.type}`);
  const object = synth(ast.object);
  if (object.type !== "Object")
    err(". expects object", ast.object);
  const typeProp = object.properties.find(({name: typeName}) => typeName === prop.name);
  if (!typeProp)
    err(`no such property ${prop.name}`, prop);
  return typeProp.type;
}
export default function synth(ast) {
  switch (ast.type) {
    case "NullLiteral":
      return synthNull(ast);
    case "BooleanLiteral":
      return synthBoolean(ast);
    case "NumericLiteral":
      return synthNumber(ast);
    case "StringLiteral":
      return synthString(ast);
    case "ObjectExpression":
      return synthObject(ast);
    case "MemberExpression":
      return synthMember(ast);
    default:
      bug(`unimplemented ${ast.type}`);
  }
}
