const iterateObject = (fn, arr, obj) => {
  for (const key of arr) {
    if (typeof obj[key] === 'object') {
      return iterateObject(fn, arr, obj[key]);
    }
    if (typeof obj[key] !== 'object' && obj[key] !== undefined) {
      return fn(obj[key]);
    }
  }
  return false;
};

const pathSatisfies = (predicateFn, keysArr, obj) => {
  if (typeof predicateFn !== 'function' || !Array.isArray(keysArr) || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new Error('You must provide valid arguments.');
  }
  return iterateObject(predicateFn, keysArr, obj);
};

export {
  pathSatisfies,
};
