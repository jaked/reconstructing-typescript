import generate from "../../_snowpack/pkg/@babel/generator.js";
export default function(ast) {
  return generate(ast).code;
}
