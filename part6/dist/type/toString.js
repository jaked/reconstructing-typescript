import { bug } from "../util/err.js";
export default function toString(type) {
  switch (type.type) {
    case "Never":
      return "never";

    case "Unknown":
      return "unknown";

    case "Null":
      return "null";

    case "Boolean":
      return "boolean";

    case "Number":
      return "number";

    case "String":
      return "string";

    case "Object":
      {
        const props = type.properties.map(({
          name,
          type: type2
        }) => `${name}: ${toString(type2)}`);
        return `{ ${props.join(", ")} }`;
      }

    case "Function":
      {
        const args = type.args.map(toString);
        return `(${args.join(", ")}) => ${toString(type.ret)}`;
      }

    case "Singleton":
      if (type.base.type === "String") return `'${type.value}'`;else return `${type.value}`;

    case "Union":
      return type.types.map(type2 => {
        const typeString = toString(type2);
        if (type2.type === "Function") return `(${typeString})`;else return typeString;
      }).join(" | ");

    case "Intersection":
      return type.types.map(type2 => {
        const typeString = toString(type2);
        if (type2.type === "Function") return `(${typeString})`;else return typeString;
      }).join(" & ");

    default:
      bug(`unexpected ${type.type}`);
  }
}