import { Type } from './types';
import { not, nullType, singleton } from './constructors';
import { isFunction, isIntersection, isNull, isObject, isSingleton, isUnion } from './validators';
import union from './union';
import intersection from './intersection';

export function isTruthy(type: Type): unknown {
  if (isObject(type)) return true;
  if (isFunction(type)) return true;
  if (isSingleton(type)) return type.value;
  if (isUnion(type)) return type.types.every(isTruthy);
  if (isIntersection(type)) return type.types.some(isTruthy);
  return false;
}

export function isFalsy(type: Type): unknown {
  if (isNull(type)) return true;
  if (isSingleton(type)) return !type.value;
  if (isUnion(type)) return type.types.every(isFalsy);
  if (isIntersection(type)) return type.types.some(isFalsy);
  return false;
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
