import * as Trace from "../util/trace.js";
import propType from "./propType.js";
import * as Type from "./validators.js";
const isSubtype = Trace.instrument("isSubtype", function isSubtype2(a, b) {
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
      if (!aType) return false;else return isSubtype2(aType, bType);
    });
  }

  return false;
});
export default isSubtype;