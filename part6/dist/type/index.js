import * as Constructors from "./constructors.js";
import * as Validators from "./validators.js";
import * as Union from "./union.js";
import Intersection from "./intersection.js";
import IsSubtype from "./isSubtype.js";
import ToString from "./toString.js";
import OfTSType from "./ofTSType.js";
import PropType from "./propType.js";
import * as Truthiness from "./truthiness.js";
import Map from "./map.js";
var Type;

(function (Type2) {
  Type2.never = Constructors.never;
  Type2.unknown = Constructors.unknown;
  Type2.nullType = Constructors.nullType;
  Type2.boolean = Constructors.boolean;
  Type2.number = Constructors.number;
  Type2.string = Constructors.string;
  Type2.object = Constructors.object;
  Type2.functionType = Constructors.functionType;
  Type2.singleton = Constructors.singleton;
  Type2.union = Union.union;
  Type2.distributeUnion = Union.distributeUnion;
  Type2.intersection = Intersection;
  Type2.not = Constructors.not;
  Type2.isNever = Validators.isNever;
  Type2.isUnknown = Validators.isUnknown;
  Type2.isNull = Validators.isNull;
  Type2.isBoolean = Validators.isBoolean;
  Type2.isNumber = Validators.isNumber;
  Type2.isString = Validators.isString;
  Type2.isObject = Validators.isObject;
  Type2.isFunction = Validators.isFunction;
  Type2.isSingleton = Validators.isSingleton;
  Type2.isUnion = Validators.isUnion;
  Type2.isIntersection = Validators.isIntersection;
  Type2.isNot = Validators.isNot;
  Type2.isSubtype = IsSubtype;
  Type2.map = Map;
  Type2.toString = ToString;
  Type2.ofTSType = OfTSType;
  Type2.propType = PropType;
  Type2.isTruthy = Truthiness.isTruthy;
  Type2.isFalsy = Truthiness.isFalsy;
  Type2.truthy = Truthiness.truthy;
  Type2.falsy = Truthiness.falsy;
})(Type || (Type = {}));

export default Type;