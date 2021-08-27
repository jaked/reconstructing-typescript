import generate from "https://cdn.skypack.dev/@babel/generator@^7.15.0";
export default function (ast) {
  return generate(ast).code;
}