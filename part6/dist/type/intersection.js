import * as Trace from "../util/trace.js";
import propType from "./propType.js";
import isSubtype from "./isSubtype.js";
import { unknown, never } from "./constructors.js";
import { isIntersection, isNever, isObject, isSingleton, isUnknown } from "./validators.js";
import { union, distributeUnion } from "./union.js";

function collapseSupertypes(ts) {
  return ts.filter((t1, i1) => ts.every((t2, i2) => i1 === i2 || !isSubtype(t2, t1) || isSubtype(t1, t2) && i1 < i2));
}

function flatten(ts) {
  return [].concat(...ts.map(t => isIntersection(t) ? t.types : t));
}

export function emptyIntersection(x, y) {
  if (isNever(x) || isNever(y)) return true;
  if (isUnknown(x) || isUnknown(y)) return false;
  if (isSingleton(x) && isSingleton(y)) return x.value != y.value;
  if (isSingleton(x)) return x.base.type !== y.type;
  if (isSingleton(y)) return y.base.type !== x.type;

  if (isObject(x) && isObject(y)) {
    return x.properties.some(({
      name: xName,
      type: xType
    }) => {
      const yType = propType(y, xName);
      if (!yType) return false;else return emptyIntersection(xType, yType);
    });
  }

  return x.type !== y.type;
}

function intersectionNoUnion(ts) {
  if (ts.some((t1, i1) => ts.some((t2, i2) => i1 < i2 && emptyIntersection(t1, t2)))) return never;
  ts = collapseSupertypes(ts);
  if (ts.length === 0) return unknown;
  if (ts.length === 1) return ts[0];
  return {
    type: "Intersection",
    types: ts
  };
}

const intersection = Trace.instrument("intersection", function intersection2(...ts) {
  ts = flatten(ts);
  ts = distributeUnion(ts).map(intersectionNoUnion);
  return union(...ts);
});
export default intersection;