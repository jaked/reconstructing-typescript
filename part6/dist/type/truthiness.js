import { not, nullType, singleton } from "./constructors.js";
import { isFunction, isIntersection, isNull, isObject, isSingleton, isUnion } from "./validators.js";
import union from "./union.js";
import intersection from "./intersection.js";
export function isTruthy(type) {
  if (isObject(type)) return true;
  if (isFunction(type)) return true;
  if (isSingleton(type)) return type.value;
  if (isUnion(type)) return type.types.every(isTruthy);
  if (isIntersection(type)) return type.types.some(isTruthy);
  return false;
}
export function isFalsy(type) {
  if (isNull(type)) return true;
  if (isSingleton(type)) return !type.value;
  if (isUnion(type)) return type.types.every(isFalsy);
  if (isIntersection(type)) return type.types.some(isFalsy);
  return false;
}
export const falsy = union(singleton(false), nullType, singleton(0), singleton(""));
export const truthy = intersection(not(singleton(false)), not(nullType), not(singleton(0)), not(singleton("")));