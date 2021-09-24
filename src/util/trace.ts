export type call = {
  name: string;
  args: unknown[];
  result: { value: unknown } | { error: unknown };
  calls: call[];
}

let calls: call[] = [];
let callsStack: call[][] = [ calls ];

export function resetCalls() {
  calls = [];
  callsStack = [ calls ];
}

export function getCalls() {
  return calls;
}

export function instrument<A,R>(name: string, f: (a: A) => R): typeof f
export function instrument<A,B,R>(name: string, f: (a: A, b: B) => R): typeof f
export function instrument<A,B,C,R>(name: string, f: (a: A, b: B, c: C) => R): typeof f
export function instrument<R>(name: string, f: (...args: unknown[]) => R): typeof f {
  return (...args) => {
    const calls: call[] = [];
    callsStack.push(calls);
    let result: { value: R } | { error: unknown}
    try {
      const value = f(...args);
      result = { value };
    } catch (error) {
      result = { error };
    }
    callsStack.pop();
    const call = { name, args, result, calls };
    callsStack[callsStack.length - 1].push(call);
    if ('value' in result) return result.value;
    else throw result.error;
  }
}
