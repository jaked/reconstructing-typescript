import * as Constructors from "./constructors.js";
import Union from "./union.js";
import IsSubtype from "./isSubtype.js";
import ToString from "./toString.js";
import OfTSType from "./ofTSType.js";
import * as Truthiness from "./truthiness.js";
var Type;

(function (Type2) {
  Type2.never = Constructors.never;
  Type2.nullType = Constructors.nullType;
  Type2.boolean = Constructors.boolean;
  Type2.number = Constructors.number;
  Type2.string = Constructors.string;
  Type2.object = Constructors.object;
  Type2.functionType = Constructors.functionType;
  Type2.singleton = Constructors.singleton;
  Type2.union = Union;
  Type2.isSubtype = IsSubtype;
  Type2.toString = ToString;
  Type2.ofTSType = OfTSType;
  Type2.isTruthy = Truthiness.isTruthy;
  Type2.isFalsy = Truthiness.isFalsy;
})(Type || (Type = {}));

export default Type;