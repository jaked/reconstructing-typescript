import { Node } from '@babel/types';
import generate from '@babel/generator';

export default function(ast: Node) {
  return generate(ast).code;
}
