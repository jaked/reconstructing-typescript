export const never = {
  type: "Never"
};
export const unknown = {
  type: "Unknown"
};
export const nullType = {
  type: "Null"
};
export const boolean = {
  type: "Boolean"
};
export const number = {
  type: "Number"
};
export const string = {
  type: "String"
};
export function object(properties) {
  if (Array.isArray(properties)) {
    return {
      type: "Object",
      properties
    };
  } else {
    return object(Object.entries(properties).map(([name, type]) => ({
      name,
      type
    })));
  }
}
export function functionType(args, ret) {
  return {
    type: "Function",
    args,
    ret
  };
}
export function singleton(value) {
  switch (typeof value) {
    case "boolean":
      return {
        type: "Singleton",
        base: boolean,
        value
      };

    case "number":
      return {
        type: "Singleton",
        base: number,
        value
      };

    case "string":
      return {
        type: "Singleton",
        base: string,
        value
      };
  }
}