import * as Types from './types';

export function isNull(type: Types.Type): type is Types.Null {
  return type.type === 'Null';
}

export function isBoolean(type: Types.Type): type is Types.Boolean {
  return type.type === 'Boolean';
}

export function isNumber(type: Types.Type): type is Types.Number {
  return type.type === 'Number';
}

export function isString(type: Types.Type): type is Types.String {
  return type.type === 'String';
}

export function isObject(type: Types.Type): type is Types.Object {
  return type.type === 'Object';
}