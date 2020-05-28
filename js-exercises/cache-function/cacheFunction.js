function cacheFunction(cb) {
  const cacheData = {};
  return (...args) => {
    if (!Object.prototype.hasOwnProperty.call(cacheData, args)) {
      cacheData[args] = cb(...args);
    }
    return cacheData[args];
  };
}

export {
  cacheFunction,
};
