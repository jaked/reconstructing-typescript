import print from "../ast/print.js";
export class Bug extends Error {
  constructor(msg) {
    super(msg);
  }
}
export function bug(msg) {
  throw new Bug(msg);
}
export class Err extends Error {
  constructor(msg, location) {
    super(location ? `${msg} at ${location}` : msg);
    this.location = location;
  }
}
export function err(msg, location) {
  if (location)
    location = typeof location === "string" ? location : print(location);
  throw new Err(msg, location);
}
