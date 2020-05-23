function addTwoBigIntegers(intStr1, intStr2) {
  if (intStr1.length === 0) return intStr2;

  const bigIntStrLength = intStr1.length > intStr2.length ? intStr1 : intStr2;
  const reverseDigits1 = intStr1.split('').reverse();
  const reverseDigits2 = intStr2.split('').reverse();
  let carry = 0;
  let sumOfIntStrs = '';

  for (let i = 0; i < bigIntStrLength; i += 1) {
    const digit1 = Number(reverseDigits1[i] || 0);
    const digit2 = Number(reverseDigits2[i] || 0);
    const sumOfDigits = digit1 + digit2 + carry;

    sumOfIntStrs = (sumOfDigits % 10) + sumOfIntStrs;
    carry = Math.floor(sumOfDigits / 10);
  }
  if (carry) {
    sumOfIntStrs = carry + sumOfIntStrs;
  }

  return sumOfIntStrs;
}

function addBigIntegers(bigIntegersStr) {
  const bigIntegers = bigIntegersStr.split('\n');
  let sumOfBigIntegersStr = '';
  for (let i = 0; i < bigIntegers; i += 1) {
    sumOfBigIntegersStr = addTwoBigIntegers(sumOfBigIntegersStr.trim(), bigIntegers[i].trim());
  }

  return sumOfBigIntegersStr;
}

export { addBigIntegers };
