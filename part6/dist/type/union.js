import { isPrimitiveSubtype, equiv } from "./isSubtype.js";
import { never } from "./constructors.js";

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
    if (t.type === "Union") accum.push(...t.types);else accum.push(t);
  });
  return accum;
}

export function distributeUnion(xs) {
  function dist(prefix, suffix, accum2) {
    if (suffix.length === 0) {
      accum2.push(prefix);
    } else if (suffix[0].type === "Union") {
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
export function union(...types) {
  types = flatten(types);
  types = collapseRedundant(types);
  if (types.length === 0) return never;
  if (types.length === 1) return types[0];
  return {
    type: "Union",
    types
  };
}
export default union;