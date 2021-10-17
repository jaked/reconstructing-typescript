import * as Trace from '../util/trace';
import { Type } from './types';
import isSubtype from './isSubtype';
import { never } from './constructors';
import { isUnion } from './validators';

const collapseSubtypes = Trace.instrument('collapseSubtypes',
function collapseSubtypes(ts: Type[]): Type[] {
  return ts.filter((t1, i1) =>
    ts.every((t2, i2) =>
      i1 === i2 ||
      !isSubtype(t1, t2) ||
      (isSubtype(t2, t1) && i1 < i2)
    )
  );
}
);

const flatten = Trace.instrument('flatten',
function flatten(ts: Type[]): Type[] {
  return ([] as Type[]).concat(
    ...ts.map(t => isUnion(t) ? t.types : t)
  );
}
);

export function distributeUnion(ts: Type[]): Type[][] {
  const accum: Type[][] = [];

  function dist(ts: Type[], i: number): void {
    if (i === ts.length) {
      accum.push(ts);
    } else {
      const ti = ts[i];
      if (isUnion(ti)) {
        for (const t of ti.types) {
          const ts2 = ts.slice(0, i).concat(t, ts.slice(i + 1));
          dist(ts2, i + 1);
        }
      } else {
        dist(ts, i + 1);
      }
    }
  }

  dist(ts, 0);
  return accum;
}

export const union = Trace.instrument('union',
function union(...types: Type[]): Type {
  types = flatten(types);
  types = collapseSubtypes(types);

  if (types.length === 0) return never;
  if (types.length === 1) return types[0];
  return { type: 'Union', types }
}
) as (...types: Type[]) => Type; // TODO(jaked)

export default union;
