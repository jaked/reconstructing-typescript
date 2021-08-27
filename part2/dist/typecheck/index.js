import Synth from "./synth.js";
import Check from "./check.js";
import EnvModule from "./env.js";
export var Typecheck;

(function (Typecheck2) {
  Typecheck2.synth = Synth;
  Typecheck2.check = Check;
  Typecheck2.Env = EnvModule;
})(Typecheck || (Typecheck = {}));

export default Typecheck;
export const Env = Typecheck.Env;