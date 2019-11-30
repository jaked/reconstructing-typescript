import { assert } from '../util/err';
import * as Parse from '../ast/parse';
import Type from './index';

function expectOfTSType(typeExpr: string, type: Type) {
  const ast = Parse.parseExpression(`_ as ${typeExpr}`);
  assert(ast.type === 'TSAsExpression', `unexpected ${ast.type}`);
  expect(Type.ofTSType(ast.typeAnnotation)).toEqual(type);
}

it('object', () => {
  expectOfTSType(
    '{ foo: number, bar: boolean }',
    Type.object({ foo: Type.number, bar: Type.boolean })
  );
});
