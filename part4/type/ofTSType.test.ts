import * as Parse from '../parse';
import Type from './index';

function expectOfTSType(typeExpr: string, type: Type) {
  const ast = Parse.parseExpression(`_ as ${typeExpr}`);
  if (ast.type !== 'TSAsExpression') throw `expected TSAsExpression`;
  expect(Type.ofTSType(ast.typeAnnotation)).toEqual(type);
}

it('object', () => {
  expectOfTSType(
    '{ foo: number, bar: boolean }',
    Type.object({ foo: Type.number, bar: Type.boolean })
  );
});

it('function', () => {
  expectOfTSType(
    '(x: number) => string',
    Type.functionType([Type.number], Type.string)
  );
});

it('singleton', () => {
  expectOfTSType(
    '7',
    Type.singleton(7)
  );
});

it('union', () => {
  expectOfTSType(
    '7 | 9',
    Type.union(Type.singleton(7), Type.singleton(9))
  );
});
