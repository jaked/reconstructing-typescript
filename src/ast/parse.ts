import {
  Expression
} from '@babel/types';
import * as Babel from '@babel/parser';
import { assert } from '../util/err';
import Type from '../type';

export function parseExpression(input: string): Expression {
  return Babel.parseExpression(input, {
    plugins: [ 'typescript' ]
  });
}

export function parseType(input: string): Type {
  const ast = parseExpression(`_ as ${input}`);
  assert(ast.type === 'TSAsExpression', `unexpected ${ast.type}`);
  return Type.ofTSType(ast.typeAnnotation);
}
