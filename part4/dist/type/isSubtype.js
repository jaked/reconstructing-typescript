import * as Trace from "../util/trace.js";
import propType from "./propType.js";
import * as Type from "./validators.js";
const isSubtype = Trace.instrument("isSubtype", function (a, b) {
  if (Type.isNever(a)) return true;
  if (Type.isUnion(a)) return a.types.every(a2 => isSubtype(a2, b));
  if (Type.isUnion(b)) return b.types.some(b2 => isSubtype(a, b2));
  if (Type.isNull(a) && Type.isNull(b)) return true;
  if (Type.isBoolean(a) && Type.isBoolean(b)) return true;
  if (Type.isNumber(a) && Type.isNumber(b)) return true;
  if (Type.isString(a) && Type.isString(b)) return true;

  if (Type.isObject(a) && Type.isObject(b)) {
    return b.properties.every(({
      name: bName,
      type: bType
    }) => {
      const aType = propType(a, bName);
      if (!aType) return false;else return isSubtype(aType, bType);
    });
  }

  if (Type.isFunction(a) && Type.isFunction(b)) {
    return a.args.length === b.args.length && a.args.every((a2, i) => isSubtype(b.args[i], a2)) && isSubtype(a.ret, b.ret);
  }

  if (Type.isSingleton(a)) {
    if (Type.isSingleton(b)) return a.value === b.value;else return isSubtype(a.base, b);
  }

  return false;
});
export default isSubtype;