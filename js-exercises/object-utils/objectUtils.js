const map = (obj, cb) => {
  const mappedPairs = Object.entries(obj).map(pair => cb(pair));
  return Object.fromEntries(mappedPairs);
};

const filter = (obj, cb) => {
  const mappedPairs = Object.entries(obj).filter(pair => cb(pair));
  return Object.fromEntries(mappedPairs);
};

const invert = (obj) => map(obj, ([key, val]) => [val, key]);

const merge = objects => objects.reduce((resObj, currObj) => Object.assign(resObj, currObj), {});

const every = (array, cb) => array.every(el => cb(el));

const some = (array, cb) => array.some(el => cb(el));

export {
  map,
  filter,
  invert,
  merge,
  every,
  some,
};
