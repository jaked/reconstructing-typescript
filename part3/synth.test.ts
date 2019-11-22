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

describe('singleton', () => {
  it('ok', () => {
    expectSynth(
      '7',
      '7'
    )
  });
});