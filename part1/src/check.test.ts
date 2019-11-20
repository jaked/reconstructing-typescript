import Type from './type';
import Env from './env';
import parse from './parse';
import check from './check';

function expectCheck(expr: string, type: Type, env: Env = Env.empty) {
  const ast = parse(expr);
  expect(() => check(env, ast, type)).not.toThrow();
}

function expectCheckToThrow(expr: string, type: Type, env: Env = Env.empty) {
  const ast = parse(expr);
  expect(() => check(env, ast, type)).toThrow();
}

describe('object', () => {
  it('ok', () => {
    expectCheck(
      '{ foo: 1, bar: true }',
      Type.object({ foo: Type.number, bar: Type.boolean })
    );
  });

  it('ok with permuted properties', () => {
    expectCheck(
      '{ foo: 1, bar: true }',
      Type.object({ bar: Type.boolean, foo: Type.number })
    );
  });

  it('throws with missing property', () => {
    expectCheckToThrow(
      '{ foo: 1 }',
      Type.object({ bar: Type.boolean, foo: Type.number })
    );
  });

  it('throws with extra property', () => {
    expectCheckToThrow(
      '{ foo: 1, bar: true, baz: "quux" }',
      Type.object({ bar: Type.boolean, foo: Type.number })
    );
  });
});

describe('function', () => {
  it('ok', () => {
    expectCheck(
      '(x) => x',
      Type.functionType([Type.number], Type.number)
    );
  });
});
