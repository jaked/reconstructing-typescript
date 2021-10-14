import * as Trace from "../util/trace.js";
import { bug } from "../util/err.js";
import { isUnion, isIntersection } from "./validators.js";
import union from "./union.js";
import intersection from "./intersection.js";

function map2(t1, t2, fn) {
  if (isUnion(t1) || isUnion(t2)) {
    const t1s = isUnion(t1) ? t1.types : [t1];
    const t2s = isUnion(t2) ? t2.types : [t2];
    const ts = [];

    for (const t12 of t1s) {
      for (const t22 of t2s) {
        ts.push(map(t12, t22, fn));
      }
    }

    return union(...ts);
  } else if (isIntersection(t1) || isIntersection(t2)) {
    const t1s = isIntersection(t1) ? t1.types : [t1];
    const t2s = isIntersection(t2) ? t2.types : [t2];
    const ts = [];
    let error = void 0;

    for (const t12 of t1s) {
      for (const t22 of t2s) {
        try {
          ts.push(fn(t12, t22));
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

function map1(t, fn) {
  if (isUnion(t)) {
    return union(...t.types.map(t2 => map(t2, fn)));
  } else if (isIntersection(t)) {
    const ts = [];
    let error = void 0;

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

const map = Trace.instrument("map", function map3(...args) {
  switch (args.length) {
    case 2:
      return map1(args[0], args[1]);

    case 3:
      return map2(args[0], args[1], args[2]);

    default:
      bug(`unexpected ${args.length}`);
  }
});
export default map;