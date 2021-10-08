export type call = {
  name: string;
  args: unknown[];
  result: { value: unknown } | { error: unknown };
  calls: call[];
  x: unknown;
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

export function instrument<A,R,X>(name: string, f: (a: A) => R, x?: X): typeof f
export function instrument<A,B,R,X>(name: string, f: (a: A, b: B) => R, x?: X): typeof f
export function instrument<A,B,C,R,X>(name: string, f: (a: A, b: B, c: C) => R, x?: X): typeof f
export function instrument<A,R,X>(name: string, f: (...args: A[]) => R, x?: X): typeof f
export function instrument<R,X>(name: string, f: (...args: unknown[]) => R, x?: X): typeof f {
  const fn = (...args: unknown[]) => {
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
    const call = { name, args, result, calls, x };
    callsStack[callsStack.length - 1].push(call);
    if ('value' in result) return result.value;
    else throw result.error;
  }
  fn.instrumentedName = name;
  fn.x = x;
  return fn;
}
