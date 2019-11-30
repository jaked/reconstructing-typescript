import { Type } from './types';
import { isPrimitiveSubtype, equiv } from './isSubtype';
import { unknown, never } from './constructors';
import union from './union';

function collapseRedundant(xs: Array<Type>): Array<Type> {
  let accum: Array<Type> = [];
  xs.forEach(x => {
    if (accum.some(y => isPrimitiveSubtype(y, x) || equiv(x, y))) { /* skip it */ }
    else {
      accum = accum.filter(y => !isPrimitiveSubtype(x, y));
      accum.push(x);
    }
  });
  return accum;
}

function isPrimitive(type: Type) {
  return type.type === 'Boolean' ||
    type.type == 'Number' ||
    type.type === 'String';
}

// only for primitives / singletons
export function emptyIntersection(x: Type, y: Type): boolean {
  if (x.type === 'Never' || y.type === 'Never') return true;
  if (x.type === 'Unknown' || y.type === 'Unknown') return false;
  if (x.type === 'Singleton' && y.type === 'Singleton') return x.value != y.value;
  if (x.type === 'Singleton') return x.base.type !== y.type;
  if (y.type === 'Singleton') return y.base.type !== x.type;
  if ((isPrimitive(x) || isPrimitive(y)) && x.type !== y.type) return true;
  return false;
}

function flatten(types: Array<Type>): Array<Type> {
  const accum: Array<Type> = [];
  types.forEach(t => {
    if (t.type === 'Intersection') accum.push(...t.types) // t already flattened
    else accum.push(t);
  });
  return accum;
}

function distributeUnion(xs: Array<Type>): Type {
  function dist(prefix: Array<Type>, suffix: Array<Type>, accum: Array<Type>): void {
    if (suffix.length === 0) {
      accum.push(intersection(...prefix));
    } else if (suffix[0].type === 'Union') {
      const suffix2 = suffix.slice(1);
      return suffix[0].types.forEach(y => dist([...prefix, y], suffix2, accum))
    } else {
      dist([...prefix, suffix[0]], suffix.slice(1), accum);
    }
  }

  const accum: Array<Type> = [];
  dist([], xs, accum);
  return union(...accum);
}

export default function intersection(...types: Array<Type>): Type {
  types = flatten(types);
  if (types.some(t => t.type === 'Union'))
    return distributeUnion(types);
  if (types.some(t => types.some(u => emptyIntersection(t, u))))
    return never;
  types = collapseRedundant(types);

  if (types.length === 0) return unknown;
  if (types.length === 1) return types[0];
  return { type: 'Intersection', types }
}
