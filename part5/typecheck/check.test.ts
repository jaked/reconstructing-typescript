import { Typecheck, Env } from './index';
import * as Parse from '../parse';

function expectCheck(expr: string, type: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(() => Typecheck.check(env, exprAst, typeAst)).not.toThrow();
}

function expectCheckToThrow(expr: string, type: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(() => Typecheck.check(env, exprAst, typeAst)).toThrow();
}

describe('object', () => {
  it('ok', () => {
    expectCheck(
      '{ foo: 1, bar: true }',
      '{ foo: number, bar: boolean }'
    );
  });

  it('ok intersection', () => {
    expectCheck(
      '{ foo: 1, bar: true }',
      '{ foo: number } & { bar: boolean }'
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
});

describe('function', () => {
  it('ok', () => {
    expectCheck(
      '(x) => x',
      '(x: number) => number'
    );
  });

  it('ok intersection', () => {
    expectCheck(
      '(x) => x',
      '((x: number) => number) & ((x: string) => string)  '
    );
  });
});
