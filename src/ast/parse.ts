import { Expression } from '@babel/types';
import * as Babel from '@babel/parser';
import { bug } from '../util/err';
import Type from '../type';

export function parseExpression(input: string): Expression {
  return Babel.parseExpression(input, {
    plugins: [ 'typescript' ]
  });
}

export function parseType(input: string): Type {
  const ast = parseExpression(`_ as ${input}`);
  if (ast.type !== 'TSAsExpression') bug(`unexpected ${ast.type}`);
  return Type.ofTSType(ast.typeAnnotation);
}
