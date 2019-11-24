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

  it('ok union', () => {
    const env = Env({
      o: Parse.parseType('{ foo: string } | { foo: boolean }')
    });
    expectSynth(
      'o.foo',
      'string | boolean',
      env
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
  it('ok', () => {
    const env = Env({
      f: Type.functionType([Type.number], Type.string)
    });
    expectSynth(
      'f(7)',
      'string',
      env
    );
  });

  it('ok union', () => {
    const env = Env({
      f: Type.union(
        Type.functionType([Type.number], Type.string),
        Type.functionType([Type.number], Type.boolean)
      )
    });
    expectSynth(
      'f(7)',
      'string | boolean',
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

  it('ok union', () => {
    const env = Env({
      x: Parse.parseType('7 | 9'),
      y: Parse.parseType('11 | 13')
    });
    expectSynth(
      'x + y',
      '18 | 20 | 22',
      env
    );
  });
});

describe('logical and', () => {
  it('ok', () => {
    const env = Env({ x: Type.number, y: Type.string })
    expectSynth(
      'x && y',
      'number | string',
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

  it('ok union', () => {
    const env = Env({
      x: Parse.parseType('boolean | 7'),
      y: Parse.parseType('string | 9')
    });
    expectSynth(
      'x && y',
      'boolean | string | 9',
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

  it('ok union', () => {
    const env = Env({
      x: Parse.parseType('7 | "" | string')
    });
    expectSynth(
      '!x',
      'boolean',
      env
    );
  });
});
