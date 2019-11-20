export class NullType { kind = 'Null' as const }
export class BooleanType { kind = 'Boolean' as const }
export class NumberType { kind = 'Number' as const }
export class StringType { kind = 'String' as const }

export class ObjectType {
  kind = 'Object' as const;
  constructor(public fields: { [name: string]: Type }) {}
}

export class FunctionType {
  kind = 'function' as const;
  constructor(public args: Type[], public ret: Type) {}
}

export type Type =
  NullType |
  BooleanType |
  NumberType |
  StringType |
  ObjectType |
  FunctionType;

const nullType = new NullType();
export { nullType as null };
export const boolean = new BooleanType();
export const number = new NumberType();
export const string = new StringType();

export function object(fields: { [name: string]: Type }) {
  return new ObjectType(fields);
}
