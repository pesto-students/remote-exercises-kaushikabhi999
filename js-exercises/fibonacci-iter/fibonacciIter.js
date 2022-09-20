const fibonacciIter = {
  [Symbol.iterator]() {
    let prev1 = 0;
    let prev2 = 1;
    const iterator = {
      next() {
        const currentVal = prev1 + prev2;
        prev1 = prev2;
        prev2 = currentVal;
        return { value: currentVal, done: false };
      },
    };
    return iterator;
  },
};

export { fibonacciIter };
