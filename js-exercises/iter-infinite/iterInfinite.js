function* count(start, step = 1) {
  if (!Number.isInteger(start)) {
    throw new TypeError('start paramter should be an integer');
  }
  if (!Number.isInteger(step)) {
    throw new TypeError('step paramter should be an integer');
  }
  for (let i = start; ; i += step) {
    yield i;
  }
}

function* cycle(iter, nTimes = null) {
  if (nTimes !== null && !Number.isInteger(nTimes)) {
    throw new TypeError('Second paramter should be an positive integer');
  }
  if (Number.isInteger(nTimes) && nTimes <= 0) {
    throw new Error('Second parameter should be greater than 0');
  }
  let i = 0;
  const isTrue = index => (nTimes !== null ? index < nTimes : true);
  while (true) {
    for (const el of iter) {
      if (isTrue(i)) {
        yield el;
      } else {
        return;
      }
      i += 1;
    }
  }
}

function* repeat(value, nTimes = null) {
  if (nTimes !== null && !Number.isInteger(nTimes)) {
    throw new TypeError('Second paramter should be an positive integer');
  }
  if (Number.isInteger(nTimes) && nTimes <= 0) {
    throw new Error('Second parameter should be greater than 0');
  }
  const isTrue = iter => (nTimes !== null ? iter < nTimes : true);
  for (let i = 0; isTrue(i); i += 1) {
    yield value;
  }
}

export {
  count,
  cycle,
  repeat,
};
