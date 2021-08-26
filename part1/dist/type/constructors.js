export const nullType = {type: "Null"};
export const boolean = {type: "Boolean"};
export const number = {type: "Number"};
export const string = {type: "String"};
export function object(properties) {
  if (Array.isArray(properties)) {
    return {type: "Object", properties};
  } else {
    return object(Object.entries(properties).map(([name, type]) => ({name, type})));
  }
}
