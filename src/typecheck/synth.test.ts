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
  // TODO(jaked)
  // moving the error location to a separate field broke tests but there
  // doesn't seem to be an easy way to test for a non-message field in
  // an error in Jest. maybe I have to implement a matcher?
  expect(() => Typecheck.synth(env, exprAst)).toThrow(/*msg*/);
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
  const env = Env({
    f: Type.functionType([Type.number], Type.string)
  });

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

  it('ok union', () => {
    const env = Env({
      f: Parse.parseType('((n: number) => string) | ((n: number) => boolean)')
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

  it('ok mixed', () => {
    const env = Env({ x: Type.number, y: Type.singleton(9) });
    expectSynth(
      'x + y',
      'number',
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

describe('equality', () => {
  it('ok', () => {
    const env = Env({ x: Type.number, y: Type.number });
    expectSynth(
      'x === y',
      'boolean',
      env
    );
  });

  it('ok singleton', () => {
    const env = Env({ x: Type.singleton(7), y: Type.singleton(9) });
    expectSynth(
      'x === y',
      'false',
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

describe('logical or', () => {
  it('ok', () => {
    const env = Env({ x: Type.number, y: Type.string })
    expectSynth(
      'x || y',
      'number | string',
      env
    );
  });

  it('ok left truthy', () => {
    const env = Env({ x: Type.singleton(7), y: Type.string })
    expectSynth(
      'x || y',
      '7',
      env
    );
  });

  it('ok left falsy', () => {
    const env = Env({ x: Type.singleton(0), y: Type.string })
    expectSynth(
      'x || y',
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

describe('typeof', () => {
  it('ok', () => {
    const env = Env({ x: Type.number });
    expectSynth(
      'typeof x',
      '"number"',
      env
    );
  });
});
