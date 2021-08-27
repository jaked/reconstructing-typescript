import { not, nullType, singleton } from "./constructors.js";
import union from "./union.js";
import intersection from "./intersection.js";
export function isTruthy(type) {
  switch (type.type) {
    case "Object":
      return true;

    case "Function":
      return true;

    case "Singleton":
      return type.value;

    default:
      return false;
  }
}
export function isFalsy(type) {
  switch (type.type) {
    case "Null":
      return true;

    case "Singleton":
      return !type.value;

    default:
      return false;
  }
}
export const falsy = union(singleton(false), nullType, singleton(0), singleton(""));
export const truthy = intersection(not(singleton(false)), not(nullType), not(singleton(0)), not(singleton("")));