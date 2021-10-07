import Type from './index';

describe('union', () => {
  it('returns bottom for empty args', () => {
    expect(Type.union()).toEqual(Type.never);
  });

  it('elides union node for single elements', () => {
    const actual =
      Type.union(Type.boolean, Type.boolean);
    const expected =
      Type.boolean;
    expect(actual).toEqual(expected);
  });

  it('flattens nested unions', () => {
    const actual =
      Type.union(
        Type.string,
        Type.union(
          Type.number,
          Type.boolean)
        );
      const expected =
        Type.union(Type.string, Type.number, Type.boolean);
      expect(actual).toEqual(expected);
  });

  it('collapses nevers', () => {
    const actual =
      Type.union(Type.string, Type.never, Type.boolean);
    const expected =
      Type.union(Type.string, Type.boolean);
    expect(actual).toEqual(expected);
  });

  it('collapses equivalent elements', () => {
    const actual =
      Type.union(
        Type.number,
        Type.object({ foo: Type.singleton(7), bar: Type.singleton(9) }),
        Type.boolean,
        Type.number,
        Type.object({ foo: Type.singleton(7), bar: Type.singleton(9) }),
      );
    const expected =
      Type.union(
        Type.number,
        Type.object({ foo: Type.singleton(7), bar: Type.singleton(9) }),
        Type.boolean
      );
    expect(actual).toEqual(expected);
  });

  it('collapses object subtypes', () => {
    const actual =
      Type.union(
        Type.object({ foo: Type.string, bar: Type.boolean }),
        Type.object({ foo: Type.string, bar: Type.boolean, baz: Type.number })
      );
    const expected =
    Type.object({ foo: Type.string, bar: Type.boolean });
    expect(actual).toEqual(expected);
  });

  it('collapses primitive subtypes', () => {
    const actual =
      Type.union(
        Type.number,
        Type.singleton(7),
      );
    const expected =
      Type.number;
    expect(actual).toEqual(expected);
  });
});
