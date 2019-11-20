import Type from './type';
import Env from './env';
import parse from './parse';
import synth from './synth';

function expectSynth(expr: string, type: Type, env: Env = Env.empty) {
  const ast = parse(expr);
  expect(synth(env, ast)).toEqual(type);
}

describe('object', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: 1, bar: true }',
      Type.object({ foo: Type.number, bar: Type.boolean })
    );
  });
});

describe('function', () => {
  it('ok', () => {
    expectSynth(
      '(x: number) => x',
      Type.functionType([Type.number], Type.number)
    );
  });
});
