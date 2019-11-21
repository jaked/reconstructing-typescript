import {
  Expression
} from '@babel/types';
import * as Babel from '@babel/parser';
import Type from './type';

export function parseExpression(input: string): Expression {
  return Babel.parseExpression(input, {
    plugins: [ 'typescript' ]
  });
}

export function parseType(input: string): Type {
  const ast = parseExpression(`_ as ${input}`);
  if (ast.type !== 'TSAsExpression') throw 'expected TSAsExpression';
  return Type.ofTSType(ast.typeAnnotation);
}
