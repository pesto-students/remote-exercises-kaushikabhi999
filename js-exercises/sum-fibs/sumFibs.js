function sumFibs(num) {
  let firstNum = 1;
  let secondNum = 1;
  let sumOfOddsFibs = 0;
  while (firstNum <= num) {
    if (firstNum % 2 !== 0) {
      sumOfOddsFibs += firstNum;
    }
    const nextDigits = [secondNum, secondNum += firstNum];
    const [firstElement] = nextDigits;
    firstNum = firstElement;
  }
  return sumOfOddsFibs;
}

export {
  sumFibs,
};
