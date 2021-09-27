import Typecheck from './index';
import * as Parse from '../ast/parse';

function expectCheck(expr: string, type: string) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(() => Typecheck.check(exprAst, typeAst)).not.toThrow();
}

function expectCheckToThrow(expr: string, type: string, msg?: string) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  // TODO(jaked)
  // moving the error location to a separate field broke tests but there
  // doesn't seem to be an easy way to test for a non-message field in
  // an error in Jest. maybe I have to implement a matcher?
  expect(() => Typecheck.check(exprAst, typeAst)).toThrow(/*msg*/);
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
      '{ bar: boolean, foo: number }',
      'at {'
    );
  });

  it('throws with extra property', () => {
    expectCheckToThrow(
      '{ foo: 1, bar: true, baz: "quux" }',
      '{ bar: boolean, foo: number }',
      'at baz'
    );
  });
});
