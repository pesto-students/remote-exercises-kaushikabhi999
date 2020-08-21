const limitFunctionCallCount = (cb, maxInvokeCount) => {
  let cbFnInvokeCount = 0;
  return (...args) => {
    cbFnInvokeCount += 1;
    return cbFnInvokeCount > maxInvokeCount ? null : cb(...args);
  };
};

export {
  limitFunctionCallCount,
};
