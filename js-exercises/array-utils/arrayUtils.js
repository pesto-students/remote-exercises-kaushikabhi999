const forEach = (array, cb) => {
  const iteratedElements = [];
  for (const el of array) {
    iteratedElements.push(cb(el));
  }
  return iteratedElements.length;
};

const map = (array, cb) => {
  const mappedArr = [];
  for (const el of array) {
    mappedArr.push(cb(el));
  }
  return mappedArr;
};

const filter = (array, cb) => {
  const mappedArr = [];
  for (const el of array) {
    const isTrue = cb(el);
    if (isTrue) {
      mappedArr.push(el);
    }
  }
  return mappedArr;
};

const reduce = (array, cb, initialVal) => {
  let result = initialVal;
  for (const el of array) {
    result = cb(result, el);
  }
  return result;
};

export {
  forEach,
  map,
  filter,
  reduce,
};
