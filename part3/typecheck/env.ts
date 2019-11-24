import Type from '../type';

function Env(bindings: { [name: string]: Type }): Env {
  const env = (name: string) => bindings[name];
  env.set = (name: string, type: Type) =>
    Env(Object.assign({}, bindings, { [name]: type }))
  return env;
}

type Env = {
  (name: string): Type | undefined;
  set(name: string, type: Type): Env;
}

module Env {
  export const empty = Env({});
}

export default Env;
