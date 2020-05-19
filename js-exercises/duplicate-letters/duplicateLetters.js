
function duplicateLetters(...args) {
  const str = args[0];
  const strObj = [];
  let maxFrequency = 1;
  for (const char of str) {
    if (!Object.prototype.hasOwnProperty.call(strObj, char)) {
      strObj[char] = 1;
    } else {
      strObj[char] += 1;
    }
    if (strObj[char] > maxFrequency) {
      maxFrequency = strObj[char];
    }
  }
  return maxFrequency === 1 ? false : maxFrequency;
}

export {
  duplicateLetters,
};
