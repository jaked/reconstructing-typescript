import * as Parse from '../ast/parse';
import { Env } from './index';
import narrow from './narrow';

function expectNarrow(type: string, expr: string, trueType: string, falseType: string) {
  const typeAst = Parse.parseType(type);
  const exprAst = Parse.parseExpression(expr);
  const trueTypeAst = Parse.parseType(trueType);
  const falseTypeAst = Parse.parseType(falseType);
  const env = Env({ x: typeAst });
  expect(narrow(env, exprAst, true)('x')).toEqual(trueTypeAst);
  expect(narrow(env, exprAst, false)('x')).toEqual(falseTypeAst);
}

describe('narrow', () => {
  it('equality', () => {
    expectNarrow(
      `'foo' | 'bar'`,
      `x === 'foo'`,
      `'foo'`,
      `'bar'`
    );
  });

  it('member', () => {
    expectNarrow(
      `{ type: 'foo', foo: number } | { type: 'bar', bar: number }`,
      `x.type === 'foo'`,
      `{ type: 'foo', foo: number }`,
      `{ type: 'bar', bar: number }`
    );
  });

  it('typeof', () => {
    expectNarrow(
      `number | string`,
      `typeof(x) === 'string'`,
      `string`,
      `number`
    );
  });

  it('truthiness', () => {
    expectNarrow(
      `number | null`,
      `x`,
      `number`,
      `0 | null`
    );
  });

  it('and', () => {
    expectNarrow(
      `0 | 1 | 2`,
      `x && x !== 1`,
      `2`,
      `0 | 1 | 2`
    );
  });

  it('or', () => {
    expectNarrow(
      `0 | 1 | 2`,
      `x || x !== 1`,
      `0 | 1 | 2`,
      `never`
    );
  });
});
