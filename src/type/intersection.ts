import { Type } from './types';
import isSubtype from './isSubtype';
import { unknown, never } from './constructors';
import { union, distributeUnion } from './union';

function collapseRedundant(xs: Array<Type>): Array<Type> {
  let accum: Array<Type> = [];
  xs.forEach(x => {
    if (accum.some(y => isSubtype(y, x))) { /* skip it */ }
    else {
      accum = accum.filter(y => !isSubtype(x, y));
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

export default function intersection(...types: Array<Type>): Type {
  types = flatten(types);
  if (types.some(t => t.type === 'Union'))
    return union(...distributeUnion(types).map(ts => intersection(...ts)));
  if (types.some(t => types.some(u => emptyIntersection(t, u))))
    return never;
  types = collapseRedundant(types);

  if (types.length === 0) return unknown;
  if (types.length === 1) return types[0];
  return { type: 'Intersection', types }
}
