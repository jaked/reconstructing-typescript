import { isPrimitiveSubtype, equiv } from "./isSubtype.js";
import { unknown, never } from "./constructors.js";
import { union, distributeUnion } from "./union.js";

function collapseRedundant(xs) {
  let accum = [];
  xs.forEach(x => {
    if (accum.some(y => isPrimitiveSubtype(y, x) || equiv(x, y))) {} else {
      accum = accum.filter(y => !isPrimitiveSubtype(x, y));
      accum.push(x);
    }
  });
  return accum;
}

function isPrimitive(type) {
  return type.type === "Boolean" || type.type == "Number" || type.type === "String";
}

export function emptyIntersection(x, y) {
  if (x.type === "Never" || y.type === "Never") return true;
  if (x.type === "Unknown" || y.type === "Unknown") return false;
  if (x.type === "Singleton" && y.type === "Singleton") return x.value != y.value;
  if (x.type === "Singleton") return x.base.type !== y.type;
  if (y.type === "Singleton") return y.base.type !== x.type;
  if ((isPrimitive(x) || isPrimitive(y)) && x.type !== y.type) return true;
  return false;
}

function flatten(types) {
  const accum = [];
  types.forEach(t => {
    if (t.type === "Intersection") accum.push(...t.types);else accum.push(t);
  });
  return accum;
}

export default function intersection(...types) {
  types = flatten(types);
  if (types.some(t => t.type === "Union")) return union(...distributeUnion(types).map(ts => intersection(...ts)));
  if (types.some(t => types.some(u => emptyIntersection(t, u)))) return never;
  types = collapseRedundant(types);
  if (types.length === 0) return unknown;
  if (types.length === 1) return types[0];
  return {
    type: "Intersection",
    types
  };
}