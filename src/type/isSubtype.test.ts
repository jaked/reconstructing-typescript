import * as Parse from '../ast/parse'
import Type from './index';

function expectIsSubtype(a: string, b: string) {
  const aAst = Parse.parseType(a);
  const bAst = Parse.parseType(b);
  return expect(Type.isSubtype(aAst, bAst));
}

describe('primitives', () => {
  it('number <: number', () => {
    expectIsSubtype('number', 'number').toBe(true);
  });

  it('number </: string', () => {
    expectIsSubtype('number', 'string').toBe(false);
  });
});

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

describe('singletons', () => {
  it('ok same value', () => {
    expectIsSubtype(
      '7',
      '7'
    ).toBe(true);
  });

  it('ok base type', () => {
    expectIsSubtype(
      '7',
      'number'
    ).toBe(true);
  });

  it('different values', () => {
    expectIsSubtype(
      '7',
      '9'
    ).toBe(false);
  });

  it('different base types', () => {
    expectIsSubtype(
      '7',
      'string'
    ).toBe(false);
  });
});

describe('unions', () => {
  it('ok', () => {
    expectIsSubtype(
      "7 | 'foo' | 9",
      "number | string"
    ).toBe(true);
  });

  it('not every on left', () => {
    expectIsSubtype(
      "7 | 'foo' | 9",
      "number"
    ).toBe(false);
  })

  it('not some on right', () => {
    expectIsSubtype(
      "7",
      "boolean | string"
    ).toBe(false);
  });
});

describe('intersections', () => {
  it('ok', () => {
    expectIsSubtype(
      "{ foo: 7, bar: 9 } & { baz: 'quux' }",
      "{ foo: number } & { bar: number }"
    ).toBe(true);
  });

  it('not some on left', () => {
    expectIsSubtype(
      "{ bar: string } & { baz: boolean }",
      "{ foo: number }"
    ).toBe(false);
  })

  it('not every on right', () => {
    expectIsSubtype(
      "{ bar: string }",
      "{ foo: number } & { bar: string }"
    ).toBe(false);
  });
});
