function Env(map) {
  if (map instanceof Map) {
    return {
      get: name => map.get(name),
      set: (name, type) => Env(new Map([...map, [name, type]])),
      entries: () => map.entries()
    };
  } else {
    return Env(new Map(Object.entries(map)));
  }
}

(function (Env2) {
  Env2.empty = Env2({});
})(Env || (Env = {}));

export default Env;