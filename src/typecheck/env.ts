import Type from '../type';

type Env = {
  get(name: string): Type | undefined;
  set(name: string, type: Type): Env;
  entries(): IterableIterator<[string, Type]>;
}

function Env(map: Map<string, Type> | { [name: string]: Type }): Env {
  if (map instanceof Map) {
    return {
      get: (name: string) => map.get(name),
      set: (name: string, type: Type) =>
        Env(new Map([...map, [name, type]])),
      entries: () => map.entries()
    }
  } else {
    return Env(new Map(Object.entries(map)));
  }
}

module Env {
  export const empty = Env({});
}

export default Env;
