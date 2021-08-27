export default function isSubtype(a, b) {
  if (a.type === "Null" && b.type === "Null") return true;
  if (a.type === "Boolean" && b.type === "Boolean") return true;
  if (a.type === "Number" && b.type === "Number") return true;
  if (a.type === "String" && b.type === "String") return true;

  if (a.type === "Object" && b.type === "Object") {
    return b.properties.every(({
      name: bName,
      type: bType
    }) => {
      const aProp = a.properties.find(({
        name: aName
      }) => aName === bName);
      if (!aProp) return false;else return isSubtype(aProp.type, bType);
    });
  }

  if (a.type === "Function" && b.type === "Function") {
    return a.args.length === b.args.length && a.args.every((a2, i) => isSubtype(b.args[i], a2)) && isSubtype(a.ret, b.ret);
  }

  if (a.type === "Singleton") {
    if (b.type === "Singleton") return a.value === b.value;else return isSubtype(a.base, b);
  }

  return false;
}