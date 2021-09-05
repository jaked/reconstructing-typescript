import { isString } from "./validators.js";
export default function toString(type) {
  switch (type.type) {
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
      if (isString(type.base)) return `'${type.value}'`;else return `${type.value}`;
  }
}