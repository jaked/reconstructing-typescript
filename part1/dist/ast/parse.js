import * as Babel from "../../_snowpack/pkg/@babel/parser.js";
import {bug} from "../util/err.js";
import Type from "../type/index.js";
export function parseExpression(input) {
  return Babel.parseExpression(input, {
    plugins: ["typescript"]
  });
}
export function parseType(input) {
  const ast = parseExpression(`_ as ${input}`);
  if (ast.type !== "TSAsExpression")
    bug(`unexpected ${ast.type}`);
  return Type.ofTSType(ast.typeAnnotation);
}
