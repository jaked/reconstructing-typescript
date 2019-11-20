import * as Babel from '@babel/parser';
import { Expression } from '@babel/types';

export default function parse(input: string): Expression {
  return Babel.parseExpression(input, {
    plugins: [ 'typescript' ]
  });
}
