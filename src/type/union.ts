import * as Trace from '../util/trace';
import { Type } from './types';
import isSubtype from './isSubtype';
import { never } from './constructors';
import { isUnion } from './validators';

function collapseSubtypes(ts: Type[]): Type[] {
  return ts.filter((t1, i1) =>
    ts.every((t2, i2) =>
      i1 === i2 ||
      !isSubtype(t1, t2) ||
      (isSubtype(t2, t1) && i1 < i2)
    )
  );
}

function flatten(ts: Type[]): Type[] {
  return ([] as Type[]).concat(
    ...ts.map(t => isUnion(t) ? t.types : t)
  );
}

const union = Trace.instrument('union',
function union(...types: Type[]): Type {
  types = flatten(types);
  types = collapseSubtypes(types);

  if (types.length === 0) return never;
  if (types.length === 1) return types[0];
  return { type: 'Union', types }
}
) as (...types: Type[]) => Type; // TODO(jaked)

export default union;
