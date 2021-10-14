import * as Trace from "../util/trace.js";
import isSubtype from "./isSubtype.js";
import { never } from "./constructors.js";
import { isUnion } from "./validators.js";

function collapseSubtypes(ts) {
  return ts.filter((t1, i1) => ts.every((t2, i2) => i1 === i2 || !isSubtype(t1, t2) || isSubtype(t2, t1) && i1 < i2));
}

function flatten(ts) {
  return [].concat(...ts.map(t => isUnion(t) ? t.types : t));
}

export function distributeUnion(xs) {
  function dist(prefix, suffix, accum2) {
    if (suffix.length === 0) {
      accum2.push(prefix);
    } else if (isUnion(suffix[0])) {
      const suffix2 = suffix.slice(1);
      return suffix[0].types.forEach(y => dist([...prefix, y], suffix2, accum2));
    } else {
      dist([...prefix, suffix[0]], suffix.slice(1), accum2);
    }
  }

  const accum = [];
  dist([], xs, accum);
  return accum;
}
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