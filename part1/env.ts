import Type from './type';

type Env = {
  get(name: string): Type | undefined;
  set(name: string, type: Type): Env;
}

class EnvImpl {
  bindings: { [name: string]: Type };
  constructor(bindings: { [name: string]: Type } = {}) {
    this.bindings = bindings
  }

  get(name: string): Type | undefined {
    return this.bindings[name];
  }

  set(name: string, type: Type): Env {
    return new EnvImpl(Object.assign({}, this.bindings, { [name]: type }));
  }
}

module Env {
  export const empty = new EnvImpl();
}

export default Env;
