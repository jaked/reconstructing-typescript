import { isPrimitiveSubtype, equiv } from "./isSubtype.js";
import { never } from "./constructors.js";
import { isUnion } from "./validators.js";

function collapseRedundant(xs) {
  let accum = [];
  xs.forEach(x => {
    if (accum.some(y => isPrimitiveSubtype(x, y) || equiv(x, y))) {} else {
      accum = accum.filter(y => !isPrimitiveSubtype(y, x));
      accum.push(x);
    }
  });
  return accum;
}

function flatten(types) {
  const accum = [];
  types.forEach(t => {
    if (isUnion(t)) accum.push(...t.types);else accum.push(t);
  });
  return accum;
}

export default function union(...types) {
  types = flatten(types);
  types = collapseRedundant(types);
  if (types.length === 0) return never;
  if (types.length === 1) return types[0];
  return {
    type: "Union",
    types
  };
}