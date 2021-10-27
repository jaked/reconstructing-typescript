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
const union = Trace.instrument("union", function union2(...types) {
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