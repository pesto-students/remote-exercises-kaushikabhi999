function rangeIter(lb, ub) {
  if (typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }
  if (typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
  if (lb > ub) return [];
  let current = lb - 1;
  const iteratable = {
    [Symbol.iterator]() {
      current = lb - 1;
      return this;
    },
    next() {
      if (current >= ub) return { done: true };
      current += 1;
      return {
        value: current,
        done: false,
      };
    },
  };
  return iteratable;
}

export { rangeIter };
