import * as Trace from "../util/trace.js";
import isSubtype from "./isSubtype.js";
import { never } from "./constructors.js";
import { isUnion } from "./validators.js";
const collapseSubtypes = Trace.instrument("collapseSubtypes", function collapseSubtypes2(ts) {
  return ts.filter((t1, i1) => ts.every((t2, i2) => i1 === i2 || !isSubtype(t1, t2) || isSubtype(t2, t1) && i1 < i2));
});
const flatten = Trace.instrument("flatten", function flatten2(ts) {
  return [].concat(...ts.map(t => isUnion(t) ? t.types : t));
});
export const distributeUnion = Trace.instrument("distributeUnion", function distributeUnion2(ts) {
  const accum = [];

  function dist(ts2, i) {
    if (i === ts2.length) {
      accum.push(ts2);
    } else {
      const ti = ts2[i];

      if (isUnion(ti)) {
        for (const t of ti.types) {
          const ts22 = ts2.slice(0, i).concat(t, ts2.slice(i + 1));
          dist(ts22, i + 1);
        }
      } else {
        dist(ts2, i + 1);
      }
    }
  }

  dist(ts, 0);
  return accum;
});
export const union = Trace.instrument("union", function union2(...types) {
  types = flatten(types);
  types = collapseSubtypes(types);
  if (types.length === 0) return never;
  if (types.length === 1) return types[0];
  return {
    type: "Union",
    types
  };
});
export default union;