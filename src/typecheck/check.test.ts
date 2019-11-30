import { Typecheck, Env } from './index';
import * as Parse from '../ast/parse';

function expectCheck(expr: string, type: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(() => Typecheck.check(env, exprAst, typeAst)).not.toThrow();
}

function expectCheckToThrow(expr: string, type: string, msg?: string, env: Env = Env.empty) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  // TODO(jaked)
  // moving the error location to a separate field broke tests but there
  // doesn't seem to be an easy way to test for a non-message field in
  // an error in Jest. maybe I have to implement a matcher?
  expect(() => Typecheck.check(env, exprAst, typeAst)).toThrow(/*msg*/);
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
      '{ bar: boolean, foo: number }',
      'at {'
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

  it('wrong number of args', () => {
    expectCheckToThrow(
      '(x, y) => x',
      '(x: number) => number',
      'at ('
    );
  });

  it('incompatible return', () => {
    expectCheckToThrow(
      '(x) => true',
      '(x: number) => number',
      'at true'
      );
    });

  it('ok intersection', () => {
    expectCheck(
      '(x) => x',
      '((x: number) => number) & ((x: string) => string)'
    );
  });
});
