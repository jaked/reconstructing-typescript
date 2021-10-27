import * as Trace from '../util/trace';
import { Type } from './types';
import propType from './propType';
import isSubtype from './isSubtype';
import { unknown, never } from './constructors';
import { isIntersection, isNever, isObject, isSingleton, isUnion, isUnknown } from './validators';
import { union, distributeUnion } from './union';

const collapseSupertypes = Trace.instrument('collapseSupertypes',
function collapseSupertypes(ts: Type[]): Type[] {
  return ts.filter((t1, i1) =>
    ts.every((t2, i2) =>
      i1 === i2 ||
      !isSubtype(t2, t1) ||
      (isSubtype(t1, t2) && i1 < i2)
    )
  );
}
);

const flatten = Trace.instrument('flatten',
function flatten(ts: Type[]): Type[] {
  return ([] as Type[]).concat(
    ...ts.map(t => isIntersection(t) ? t.types : t)
  );
}
);

export const overlaps = Trace.instrument('overlaps',
function (x: Type, y: Type): boolean {
  if (isNever(x) || isNever(y)) return false;
  if (isUnknown(x) || isUnknown(y)) return true;

  if (isUnion(x))
    return x.types.some(x => overlaps(x, y));
  if (isUnion(y))
    return y.types.some(y => overlaps(x, y));

  if (isIntersection(x))
    return x.types.every(x => overlaps(x, y));
  if (isIntersection(y))
    return y.types.every(y => overlaps(x, y));

  if (isSingleton(x) && isSingleton(y)) return x.value === y.value;
  if (isSingleton(x)) return x.base.type === y.type;
  if (isSingleton(y)) return y.base.type === x.type;

  if (isObject(x) && isObject(y)) {
    return x.properties.every(({ name, type: xType }) => {
      const yType = propType(y, name);
      if (!yType) return true;
      else return overlaps(xType, yType);
    });
  }

  return x.type === y.type;
}
);

const intersectionNoUnion = Trace.instrument('intersectionNoUnion',
function intersectionNoUnion(ts: Type[]): Type {
  if (ts.some((t1, i1) => ts.some((t2, i2) =>
    i1 < i2 && !overlaps(t1, t2)
  )))
    return never;
  ts = collapseSupertypes(ts);

  if (ts.length === 0) return unknown;
  if (ts.length === 1) return ts[0];
  return { type: 'Intersection', types: ts }
}
);

const intersection = Trace.instrument('intersection',
function intersection(...ts: Type[]): Type {
  ts = flatten(ts);
  ts = distributeUnion(ts).map(ts => intersectionNoUnion(ts));
  return union(...ts);
}
) as (...ts: Type[]) => Type; // TODO(jaked)

export default intersection;