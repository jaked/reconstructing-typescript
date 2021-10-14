import * as Trace from '../util/trace';
import { bug } from '../util/err';
import { Type } from './types';
import { isUnion } from './validators';
import union from './union';

function map2(t1: Type, t2: Type, fn: (t1: Type, t2: Type) => Type): Type {
  if (isUnion(t1) || isUnion(t2)) {
    const t1s = isUnion(t1) ? t1.types : [t1];
    const t2s = isUnion(t2) ? t2.types : [t2];
    const ts: Type[] = [];
    for (const t1 of t1s) {
      for (const t2 of t2s) {
        ts.push(fn(t1, t2));
      }
    }
    return union(...ts);

  } else {
    return fn(t1, t2);
  }
}

function map1(t: Type, fn: (t: Type) => Type) {
  if (isUnion(t)) {
    // avoid passing extra args to fn
    // so we don't mess up tracing
    return union(...t.types.map(t => fn(t)));

  } else {
    return fn(t);
  }
}

const map:
  ((t: Type, fn: (t: Type) => Type) => Type) &
  ((t1: Type, t2: Type, fn: (t1: Type, t2: Type) => Type) => Type) =
Trace.instrument('map',
function map(...args: any[]) {
  switch (args.length) {
    case 2:
      return map1(args[0], args[1]);
    case 3:
      return map2(args[0], args[1], args[2]);
    default:
      bug(`unexpected ${args.length}`);
  }
}
);

export default map;
