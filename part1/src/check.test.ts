import Env from './env';
import * as Parse from './parse';
import check from './check';

function expectCheck(expr: string, type: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(() => check(env, exprAst, typeAst)).not.toThrow();
}

function expectCheckToThrow(expr: string, type: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(() => check(env, exprAst, typeAst)).toThrow();
}

describe('object', () => {
  it('ok', () => {
    expectCheck(
      '{ foo: 1, bar: true }',
      '{ foo: number, bar: boolean }'
    );
  });

  it('ok with permuted properties', () => {
    expectCheck(
      '{ foo: 1, bar: true }',
      '{ bar: boolean, foo: number }'
    );
  });

  it('throws with missing property', () => {
    expectCheckToThrow(
      '{ foo: 1 }',
      '{ bar: boolean, foo: number }'
    );
  });

  it('throws with extra property', () => {
    expectCheckToThrow(
      '{ foo: 1, bar: true, baz: "quux" }',
      '{ bar: boolean, foo: number }'
    );
  });
});

describe('function', () => {
  it('ok', () => {
    expectCheck(
      '(x) => x',
      '(x: number) => number'
    );
  });
});
