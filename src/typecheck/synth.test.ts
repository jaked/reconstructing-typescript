import Type from '../type';
import { Typecheck, Env } from './index';
import * as Parse from '../ast/parse';

function expectSynth(expr: string, type: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(Typecheck.synth(env, exprAst)).toEqual(typeAst);
}

function expectSynthToThrow(expr: string, msg?: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  expect(() => Typecheck.synth(env, exprAst)).toThrow(msg);
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

describe('as', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: 1 } as { foo: number }',
      '{ foo: number }'
    );
  })
});

describe('function', () => {
  it('ok', () => {
    expectSynth(
      '(x: number) => x',
      '(x: number) => number'
    );
  });

  it('missing param type', () => {
    expectSynthToThrow(
      '(x) => x',
      'at x'
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

  it('wrong arg type', () => {
    expectSynthToThrow(
      'f(false)',
      'at false',
      env
    );
  });
});
