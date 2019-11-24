import * as Types from './types';

export const nullType: Types.Null = { type: 'Null' };
export const boolean: Types.Boolean = { type: 'Boolean' };
export const number: Types.Number = { type: 'Number' };
export const string: Types.String = { type: 'String' };

export function object(properties: { [name: string]: Types.Type }): Types.Object {
  return { type: 'Object', properties }
}