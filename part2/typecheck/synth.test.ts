import Type from '../type';
import { Typecheck, Env } from './index';
import * as Parse from '../parse';

function expectSynth(expr: string, type: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(Typecheck.synth(env, exprAst)).toEqual(typeAst);
}

describe('object', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: 1, bar: true }',
      '{ foo: number, bar: boolean }'
    );
  });
});

describe('property lookup', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: "bar" }.foo',
      'string'
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
