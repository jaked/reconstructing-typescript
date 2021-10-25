import Type from './index';
import { overlaps } from './intersection';

describe('overlaps', () => {
  it('singletons', () => {
    const a = Type.number;
    const b = Type.singleton(7);
    expect(overlaps(a, a)).toBe(true);
    expect(overlaps(b, b)).toBe(true);
    expect(overlaps(a, b)).toBe(true);
    expect(overlaps(b, a)).toBe(true);
  });

  it('objects', () => {
    const a = Type.object({ foo: Type.number });
    const b = Type.object({ foo: Type.string });
    const c = Type.object({ foo: Type.singleton(7) });
    expect(overlaps(a, b)).toBe(false);
    expect(overlaps(b, a)).toBe(false);
    expect(overlaps(a, c)).toBe(true);
    expect(overlaps(c, a)).toBe(true);
  });

  it('unions', () => {
    const a = Type.union(Type.singleton(7), Type.singleton(9));
    const b = Type.singleton(7);
    const c = Type.singleton(8);
    expect(overlaps(a, b)).toBe(true);
    expect(overlaps(b, a)).toBe(true);
    expect(overlaps(a, c)).toBe(false);
    expect(overlaps(c, a)).toBe(false);
  });

  it('intersections', () => {
    const a = Type.intersection(Type.singleton(7), Type.number);
    const b = Type.singleton(7);
    const c = Type.singleton(8);
    expect(overlaps(a, b)).toBe(true);
    expect(overlaps(b, a)).toBe(true);
    expect(overlaps(a, c)).toBe(false);
    expect(overlaps(c, a)).toBe(false);
  });
});

describe('intersection', () => {
  const foo = Type.object({ foo: Type.number });
  const bar = Type.object({ bar: Type.number });
  const baz = Type.object({ baz: Type.number });

  it('returns top for empty args', () => {
    expect(Type.intersection()).toEqual(Type.unknown);
  });

  it('elides Intersection node for single elements', () => {
    const actual = Type.intersection(Type.number, Type.number);
    const expected = Type.number;
    expect(actual).toEqual(expected);
  });

  it('flattens nested intersections', () => {
    const actual =
      Type.intersection(foo, Type.intersection(bar, baz));
    const expected =
      Type.intersection(foo, bar, baz);
    expect(actual).toEqual(expected);
  });

  it('collapses unknowns', () => {
    const actual =
      Type.intersection(foo, Type.unknown, bar);
    const expected =
      Type.intersection(foo, bar);
    expect(actual).toEqual(expected);
  });

  it('collapses equivalent elements', () => {
    const actual =
      Type.intersection(
        Type.number,
        Type.object({ foo: Type.singleton(7), bar: Type.singleton(9) }),
        Type.number,
        Type.object({ foo: Type.singleton(7), bar: Type.singleton(9) }),
      );
    const expected =
      Type.intersection(
        Type.number,
        Type.object({ foo: Type.singleton(7), bar: Type.singleton(9) }),
      );
    expect(actual).toEqual(expected);
  });

  it('collapses primitive subtypes', () => {
    const actual =
      Type.intersection(
        Type.number,
        Type.singleton(7)
      );
    const expected = Type.singleton(7);
    expect(actual).toEqual(expected);
  });

  it('collapses object subtypes', () => {
    const actual =
      Type.intersection(
        Type.object({ foo: Type.string, bar: Type.boolean }),
        Type.object({ foo: Type.string, bar: Type.boolean, baz: Type.number })
      );
      const expected =
        Type.object({ foo: Type.string, bar: Type.boolean, baz: Type.number });
      expect(actual).toEqual(expected);
  });

  it('distributes intersection over union', () => {
    const [a, b, c] =
      ['a', 'b', 'c'].map(x => Type.object({ [x]: Type.boolean }));
    const actual =
      Type.intersection(a, Type.union(b, c));
    const expected =
      Type.union(Type.intersection(a, b), Type.intersection(a, c));
    expect(actual).toEqual(expected);
  });

  it('returns bottom for uninhabited primitive intersections', () => {
    const a = Type.singleton('A');
    const b = Type.singleton('B');
    expect(Type.intersection(a, b)).toEqual(Type.never);
  });

  it('returns bottom for uninhabited object intersections', () => {
    const a = Type.object({ type: Type.singleton('A') });
    const b = Type.object({ type: Type.singleton('B') });
    expect(Type.intersection(a, b)).toEqual(Type.never);
  });
});
