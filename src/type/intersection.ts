import { Type } from './types';
import isSubtype from './isSubtype';
import { unknown, never } from './constructors';
import { isBoolean, isIntersection, isNever, isNumber, isSingleton, isString, isUnknown, isUnion } from './validators';
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
  return isBoolean(type) || isNumber(type) || isString(type);
}

// only for primitives / singletons
export function emptyIntersection(x: Type, y: Type): boolean {
  if (isNever(x) || isNever(y)) return true;
  if (isUnknown(x) || isUnknown(y)) return false;
  if (isSingleton(x) && isSingleton(y)) return x.value != y.value;
  if (isSingleton(x)) return x.base.type !== y.type;
  if (isSingleton(y)) return y.base.type !== x.type;
  if ((isPrimitive(x) || isPrimitive(y)) && x.type !== y.type) return true;
  return false;
}

function flatten(types: Array<Type>): Array<Type> {
  const accum: Array<Type> = [];
  types.forEach(t => {
    if (isIntersection(t)) accum.push(...t.types) // t already flattened
    else accum.push(t);
  });
  return accum;
}

export default function intersection(...types: Array<Type>): Type {
  types = flatten(types);
  if (types.some(isUnion))
    return union(...distributeUnion(types).map(ts => intersection(...ts)));
  if (types.some(t => types.some(u => emptyIntersection(t, u))))
    return never;
  types = collapseRedundant(types);

  if (types.length === 0) return unknown;
  if (types.length === 1) return types[0];
  return { type: 'Intersection', types }
}
