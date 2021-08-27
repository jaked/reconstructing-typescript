export function isTruthy(type) {
  switch (type.type) {
    case "Object":
      return true;

    case "Function":
      return true;

    case "Singleton":
      return type.value;

    default:
      return false;
  }
}
export function isFalsy(type) {
  switch (type.type) {
    case "Null":
      return true;

    case "Singleton":
      return !type.value;

    default:
      return false;
  }
}