export function isNever(type) {
  return type.type === "Never";
}
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
export function isFunction(type) {
  return type.type === "Function";
}
export function isSingleton(type) {
  return type.type === "Singleton";
}
export function isUnion(type) {
  return type.type === "Union";
}