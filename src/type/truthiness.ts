import { Type } from './types';

export function isTruthy(type: Type) {
  switch (type.type) {
    case 'Object': return true;
    case 'Function': return true;
    case 'Singleton': return type.value;
    default: return false;
  }
}

export function isFalsy(type: Type) {
  switch (type.type) {
    case 'Null': return true;
    case 'Singleton': return !type.value;
    default: return false;
  }
}
