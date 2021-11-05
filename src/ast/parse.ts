import * as AST from '@babel/types';
import * as Babel from '@babel/parser';
import { bug } from '../util/err';
import Type from '../type';

export function parseExpression(input: string): AST.Expression {
  return Babel.parseExpression(input, {
    plugins: [ 'typescript' ],
    attachComment: false,
  });
}

export function parseType(input: string): Type {
  const ast = parseExpression(`_ as ${input}`);
  if (!AST.isTSAsExpression(ast)) bug(`unexpected ${ast.type}`);
  return Type.ofTSType(ast.typeAnnotation);
}
