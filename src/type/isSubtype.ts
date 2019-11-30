import * as Trace from '../util/trace';
import * as Types from './types';
import propType from './propType';
import * as Type from './validators';

const isSubtype = Trace.instrument('isSubtype',
function (a: Types.Type, b: Types.Type): boolean {
  if (Type.isNever(a)) return true;

  if (Type.isUnion(a)) return a.types.every(a => isSubtype(a, b));
  if (Type.isUnion(b)) return b.types.some(b => isSubtype(a, b));

  if (Type.isNull(a) && Type.isNull(b)) return true;
  if (Type.isBoolean(a) && Type.isBoolean(b)) return true;
  if (Type.isNumber(a) && Type.isNumber(b)) return true;
  if (Type.isString(a) && Type.isString(b)) return true;

  if (Type.isObject(a) && Type.isObject(b)) {
    return b.properties.every(({ name: bName, type: bType }) => {
      const aType = propType(a, bName);
      if (!aType) return false;
      else return isSubtype(aType, bType);
    });
  }

  if (Type.isFunction(a) && Type.isFunction(b)) {
    return a.args.length === b.args.length &&
      a.args.every((a, i) => isSubtype(b.args[i], a)) &&
      isSubtype(a.ret, b.ret);
  }

  if (Type.isSingleton(a)) {
    if (Type.isSingleton(b))
      return a.value === b.value;
    else
      return isSubtype(a.base, b);
  }

  return false;
}
);

export default isSubtype;

export function equiv(a: Types.Type, b: Types.Type): boolean {
  return isSubtype(a, b) && isSubtype(b, a);
}

export function isPrimitiveSubtype(a: Types.Type, b: Types.Type): boolean {
  if (Type.isNever(a)) return true;

  if (Type.isSingleton(a)) {
    if (Type.isSingleton(b))
      return a.value === b.value;
    else
      return a.base.type === b.type;
  }

  return false;
}
