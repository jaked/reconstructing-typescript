import Typecheck from './index';
import * as Parse from '../parse';

function expectCheck(expr: string, type: string) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(() => Typecheck.check(exprAst, typeAst)).not.toThrow();
}

function expectCheckToThrow(expr: string, type: string) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(() => Typecheck.check(exprAst, typeAst)).toThrow();
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