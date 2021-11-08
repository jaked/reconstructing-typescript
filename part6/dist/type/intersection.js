import * as Trace from "../util/trace.js";
import propType from "./propType.js";
import isSubtype from "./isSubtype.js";
import { unknown, never } from "./constructors.js";
import { isIntersection, isNever, isObject, isSingleton, isUnion, isUnknown } from "./validators.js";
import { union, distributeUnion } from "./union.js";
const collapseSupertypes = Trace.instrument("collapseSupertypes", function collapseSupertypes2(ts) {
  return ts.filter((t1, i1) => ts.every((t2, i2) => i1 === i2 || !isSubtype(t2, t1) || isSubtype(t1, t2) && i1 < i2));
});
const flatten = Trace.instrument("flatten", function flatten2(ts) {
  return [].concat(...ts.map(t => isIntersection(t) ? t.types : t));
});
export const overlaps = Trace.instrument("overlaps", function (x, y) {
  if (isNever(x) || isNever(y)) return false;
  if (isUnknown(x) || isUnknown(y)) return true;
  if (isUnion(x)) return x.types.some(x2 => overlaps(x2, y));
  if (isUnion(y)) return y.types.some(y2 => overlaps(x, y2));
  if (isIntersection(x)) return x.types.every(x2 => overlaps(x2, y));
  if (isIntersection(y)) return y.types.every(y2 => overlaps(x, y2));
  if (isSingleton(x) && isSingleton(y)) return x.value === y.value;
  if (isSingleton(x)) return x.base.type === y.type;
  if (isSingleton(y)) return y.base.type === x.type;

  if (isObject(x) && isObject(y)) {
    return x.properties.every(({
      name,
      type: xType
    }) => {
      const yType = propType(y, name);
      if (!yType) return true;else return overlaps(xType, yType);
    });
  }

  return x.type === y.type;
});
const intersectionNoUnion = Trace.instrument("intersectionNoUnion", function intersectionNoUnion2(ts) {
  if (ts.some((t1, i1) => ts.some((t2, i2) => i1 < i2 && !overlaps(t1, t2)))) return never;
  ts = collapseSupertypes(ts);
  if (ts.length === 0) return unknown;
  if (ts.length === 1) return ts[0];
  return {
    type: "Intersection",
    types: ts
  };
});
const intersection = Trace.instrument("intersection", function intersection2(...ts) {
  ts = flatten(ts);
  ts = distributeUnion(ts).map(ts2 => intersectionNoUnion(ts2));
  return union(...ts);
});
export default intersection;