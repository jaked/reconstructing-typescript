import Type from '../type';

function Env(map: Map<string, Type> | { [name: string]: Type }): Env {
  if (map instanceof Map) {
    return {
      get: (name: string) => map.get(name),
      set: (name: string, type: Type) =>
        Env(new Map([...map, [name, type]]))
    }
  } else {
    return Env(new Map(Object.entries(map)));
  }
}

type Env = {
  get(name: string): Type | undefined;
  set(name: string, type: Type): Env;
}

module Env {
  export const empty = new Map();
}

export default Env;
