let calls = [];
let callsStack = [calls];
export function resetCalls() {
  calls = [];
  callsStack = [calls];
}
export function getCalls() {
  return calls;
}
export function instrument(name, f) {
  return (...args) => {
    const calls2 = [];
    callsStack.push(calls2);
    let result;

    try {
      const value = f(...args);
      result = {
        value
      };
    } catch (error) {
      result = {
        error
      };
    }

    callsStack.pop();
    const call = {
      name,
      args,
      result,
      calls: calls2
    };
    callsStack[callsStack.length - 1].push(call);
    if ("value" in result) return result.value;else throw result.error;
  };
}