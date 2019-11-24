import * as Parse from '../parse'
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

describe('functions', () => {
  it('ok', () => {
    expectIsSubtype(
      '(x: {}) => { foo: boolean }',
      '(x: { bar: boolean }) => {}'
    ).toBe(true);
  });

  it('wrong number of args', () => {
    expectIsSubtype(
      '(x: {}, y: boolean) => { foo: boolean }',
      '(x: { bar: boolean }) => {}'
    ).toBe(false);
  });

  it('incompatible arg', () => {
    expectIsSubtype(
      '(x: boolean) => { foo: boolean }',
      '(x: number) => {}'
    ).toBe(false);
  });

  it('incompatible return', () => {
    expectIsSubtype(
      '(x: {}) => boolean',
      '(x: { bar: boolean }) => number'
    ).toBe(false);
  });
});
