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
    super(msg);
    this.location = location;
  }

  toString() {
    if (this.location) return `${this.message} at ${this.location}`;else return this.message;
  }

}
export function err(msg, location) {
  if (location) {
    if (typeof location === "string") throw new Err(msg, location);else throw new Err(msg, print(location));
  } else {
    throw new Err(msg);
  }
}