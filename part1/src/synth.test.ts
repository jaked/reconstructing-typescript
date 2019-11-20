import * as Type from './type';
import parse from './parse';
import synth from './synth';

function expectSynth(expr: string, type: Type.Type) {
  const ast = parse(expr);
  expect(synth(ast)).toEqual(type);
}

it('object', () => {
  expectSynth(
    '{ foo: 1, bar: true }',
    Type.object({ foo: Type.number, bar: Type.boolean })
  );
});
