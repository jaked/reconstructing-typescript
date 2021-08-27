function Env(map) {
  if (map instanceof Map) {
    return {
      get: name => map.get(name),
      set: (name, type) => Env(new Map([...map, [name, type]]))
    };
  } else {
    return Env(new Map(Object.entries(map)));
  }
}

(function (Env2) {
  Env2.empty = new Map();
})(Env || (Env = {}));

export default Env;