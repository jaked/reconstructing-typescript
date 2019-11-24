import Synth from './synth';
import Check from './check';
import EnvModule from './env';

export module Typecheck {
  export const synth = Synth;
  export const check = Check;
  export type Env = EnvModule;
  export const Env = EnvModule;
}

export default Typecheck;
export type Env = Typecheck.Env;
export const Env = Typecheck.Env;
