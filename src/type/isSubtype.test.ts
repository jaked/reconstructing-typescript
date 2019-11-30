import * as Parse from '../ast/parse'
import Type from './index';

function expectIsSubtype(a: string, b: string) {
  const aAst = Parse.parseType(a);
  const bAst = Parse.parseType(b);
  return expect(Type.isSubtype(aAst, bAst));
}

describe('objects', () => {
  it('ok', () => {
    expectIsSubtype(
      '{ foo: number, bar: boolean, baz: string }',
      '{ bar: boolean, foo: number }'
    ).toBe(true);
  });

  it('missing field', () => {
    expectIsSubtype(
      '{ foo: number }',
      '{ bar: boolean, foo: number }'
    ).toBe(false);
  });

  it('incompatible field', () => {
    expectIsSubtype(
      '{ foo: number }',
      '{ foo: boolean }'
    ).toBe(false);
  });
});
