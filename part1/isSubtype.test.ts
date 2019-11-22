import * as Parse from './parse'
import isSubtype from './isSubtype';

function expectIsSubtype(a: string, b: string) {
  const aAst = Parse.parseType(a);
  const bAst = Parse.parseType(b);
  return expect(isSubtype(aAst, bAst));
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
