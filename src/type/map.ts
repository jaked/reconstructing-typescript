import * as Trace from '../util/trace';
import { bug } from '../util/err';
import { Type } from './types';
import { isUnion, isIntersection } from './validators';
import union from './union';
import intersection from './intersection';

function map2(t1: Type, t2: Type, fn: (t1: Type, t2: Type) => Type): Type {
  if (isUnion(t1) || isUnion(t2)) {
    const t1s = isUnion(t1) ? t1.types : [t1];
    const t2s = isUnion(t2) ? t2.types : [t2];
    const ts: Type[] = [];
    for (const t1 of t1s) {
      for (const t2 of t2s) {
        ts.push(map(t1, t2, fn));
      }
    }
    return union(...ts);

  } else if (isIntersection(t1) || isIntersection(t2)) {
    const t1s = isIntersection(t1) ? t1.types : [t1];
    const t2s = isIntersection(t2) ? t2.types : [t2];
    const ts: Type[] = [];
    let error: unknown = undefined;
    for (const t1 of t1s) {
      for (const t2 of t2s) {
        try {
          ts.push(fn(t1, t2));
        } catch (e) {
          if (!error) error = e;
        }
      }
    }
    if (ts.length === 0) {
      throw error;
    } else {
      return intersection(...ts);
    }

  } else {
    return fn(t1, t2);
  }
}

function map1(t: Type, fn: (t: Type) => Type) {
  if (isUnion(t)) {
    return union(...t.types.map(t => map(t, fn)));

  } else if (isIntersection(t)) {
    const ts: Type[] = [];
    let error: unknown = undefined;
    for (const tt of t.types) {
      try {
        ts.push(fn(tt));
      } catch (e) {
        if (!error) error = e;
      }
    }
    if (ts.length === 0) {
      throw error;
    } else {
      return intersection(...ts);
    }

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
