import * as Types from './types';

export const nullType: Types.Null = { type: 'Null' };
export const boolean: Types.Boolean = { type: 'Boolean' };
export const number: Types.Number = { type: 'Number' };
export const string: Types.String = { type: 'String' };

export function object(properties: { [name: string]: Types.Type }): Types.Object {
  return { type: 'Object', properties }
}

export function functionType(args: Types.Type[], ret: Types.Type): Types.Function {
  return { type: 'Function', args, ret };
}

export function singleton(value: boolean): Types.SingletonBoolean
export function singleton(value: number): Types.SingletonNumber
export function singleton(value: string): Types.SingletonString
export function singleton(value: boolean | number | string): Types.Singleton {
  switch (typeof value) {
    case 'boolean': return { type: 'Singleton', base: boolean, value };
    case 'number': return { type: 'Singleton', base: number, value };
    case 'string': return { type: 'Singleton', base: string, value };
    default: throw 'expected boolean | number | string';
  }
}
