import * as Types from './types';

export const never: Types.Never = { type: 'Never' };

export const nullType: Types.Null = { type: 'Null' };
export const boolean: Types.Boolean = { type: 'Boolean' };
export const number: Types.Number = { type: 'Number' };
export const string: Types.String = { type: 'String' };

export function object(properties: { name: string, type: Types.Type }[] | { [name: string]: Types.Type }): Types.Object {
  if (Array.isArray(properties)) {
    return { type: 'Object', properties }
  } else {
    return object(Object.entries(properties).map(([ name, type ]) => ({ name, type })));
  }
}

export function functionType(args: Types.Type[], ret: Types.Type): Types.Function {
  return { type: 'Function', args, ret };
}

export function singleton(value: boolean | number | string): Types.Singleton {
  switch (typeof value) {
    case 'boolean': return { type: 'Singleton', base: boolean, value };
    case 'number': return { type: 'Singleton', base: number, value };
    case 'string': return { type: 'Singleton', base: string, value };
  }
}
