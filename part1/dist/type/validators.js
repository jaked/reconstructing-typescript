export function isNull(type) {
  return type.type === "Null";
}
export function isBoolean(type) {
  return type.type === "Boolean";
}
export function isNumber(type) {
  return type.type === "Number";
}
export function isString(type) {
  return type.type === "String";
}
export function isObject(type) {
  return type.type === "Object";
}