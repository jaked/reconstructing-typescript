import parse from './parse';
import Type from './type';

function expectOfTSType(typeExpr: string, type: Type) {
  const ast = parse(`_ as ${typeExpr}`);
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
