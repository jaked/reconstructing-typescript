import * as Constructors from "./constructors.js";
import IsSubtype from "./isSubtype.js";
import ToString from "./toString.js";
import OfTSType from "./ofTSType.js";
var Type;

(function (Type2) {
  Type2.nullType = Constructors.nullType;
  Type2.boolean = Constructors.boolean;
  Type2.number = Constructors.number;
  Type2.string = Constructors.string;
  Type2.object = Constructors.object;
  Type2.isSubtype = IsSubtype;
  Type2.toString = ToString;
  Type2.ofTSType = OfTSType;
})(Type || (Type = {}));

export default Type;