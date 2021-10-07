import * as Trace from '../util/trace';
import { Type } from './types';
import isSubtype from './isSubtype';
import { never } from './constructors';
import { isUnion } from './validators';

function collapseRedundant(xs: Array<Type>): Array<Type> {
  let accum: Array<Type> = [];
  xs.forEach(x => {
    if (accum.some(y => isSubtype(x, y))) { /* skip it */ }
    else {
      accum = accum.filter(y => !isSubtype(y, x));
      accum.push(x);
    }
  });
  return accum;
}

function flatten(types: Array<Type>): Array<Type> {
  const accum: Array<Type> = [];
  types.forEach(t => {
    if (isUnion(t)) accum.push(...t.types); // t already flattened
    else accum.push(t);
  });
  return accum;
}

const union = Trace.instrument('union',
function union(...types: Array<Type>): Type {
  types = flatten(types);
  types = collapseRedundant(types);

  if (types.length === 0) return never;
  if (types.length === 1) return types[0];
  return { type: 'Union', types }
}
) as (...types: Type[]) => Type; // TODO(jaked)

export default union;
