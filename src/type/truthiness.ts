import { Type } from './types';
import { not, nullType, singleton } from './constructors';
import union from './union';
import intersection from './intersection';

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

export const falsy =
  union(
    singleton(false),
    nullType,
    singleton(0),
    singleton(''),
  );

export const truthy =
  intersection(
    not(singleton(false)),
    not(nullType),
    not(singleton(0)),
    not(singleton('')),
  );
