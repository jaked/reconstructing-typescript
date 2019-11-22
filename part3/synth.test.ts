import Type from './type';
import Env from './env';
import * as Parse from './parse';
import synth from './synth';

function expectSynth(expr: string, type: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(synth(env, exprAst)).toEqual(typeAst);
}

describe('object', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: 1, bar: true }',
      '{ foo: 1, bar: true }'
    );
  });
});

describe('function', () => {
  it('ok', () => {
    expectSynth(
      '(x: number) => x',
      '(x: number) => number'
    );
  });
});

describe('function application', () => {
  const env =
    Env({ f: Type.functionType([Type.number], Type.string) });

  it('ok', () => {
    expectSynth(
      'f(7)',
      'string',
      env
    );
  });
});

describe('singleton', () => {
  it('ok', () => {
    expectSynth(
      '7',
      '7'
    )
  });
});

describe('property lookup', () => {
  it('ok', () => {
    expectSynth(
      '(x: { foo: string }) => x.foo',
      '(x: { foo: string }) => string'
    );
  });

  it('ok singleton', () => {
    expectSynth(
      '{ foo: "bar" }.foo',
      '"bar"'
    );
  });
});

describe('addition', () => {
  it('ok', () => {
    expectSynth(
      '(x: number, y: number) => x + y',
      '(x: number, y: number) => number'
    );
  });

  it('ok singleton', () => {
    expectSynth(
      '7 + 9',
      '16'
    );
  });
});
