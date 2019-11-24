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
      '{ foo: 1, bar: true }'
    );
  });
});

describe('property lookup', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: "bar" }.foo',
      '"bar"'
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

describe('addition', () => {
  it('ok', () => {
    const env = Env({ x: Type.number, y: Type.number });
    expectSynth(
      'x + y',
      'number',
      env
    );
  });

  it('ok singleton', () => {
    const env = Env({ x: Type.singleton(7), y: Type.singleton(9) });
    expectSynth(
      'x + y',
      '16',
      env
    );
  });
});

describe('logical and', () => {
  it('ok', () => {
    const env = Env({ x: Type.number, y: Type.string })
    expectSynth(
      'x && y',
      'boolean',
      env
    );
  });

  it('ok left truthy', () => {
    const env = Env({ x: Type.singleton(0), y: Type.string })
    expectSynth(
      'x && y',
      '0',
      env
    );
  });

  it('ok left falsy', () => {
    const env = Env({ x: Type.singleton(7), y: Type.string })
    expectSynth(
      'x && y',
      'string',
      env
    );
  });
});

describe('not', () => {
  it('ok', () => {
    const env = Env({ x: Type.number });
    expectSynth(
      '!x',
      'boolean',
      env
    );
  });

  it('ok truthy', () => {
    const env = Env({ x: Type.object({}) });
    expectSynth(
      '!x',
      'false',
      env
    );
  });

  it('ok falsy', () => {
    const env = Env({ x: Type.singleton('') });
    expectSynth(
      '!x',
      'true',
      env
    );
  });
});
