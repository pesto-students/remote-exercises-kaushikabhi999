const isPrime = number => {
  const len = Math.sqrt(number);
  for (let i = 2; i <= len; i += 1) {
    if (number % i === 0) return false;
  }
  return (number > 1);
};

function sumPrimes(num) {
  let assignedNum = num;
  let sumOfPrimes = 0;
  while (assignedNum) {
    if (isPrime(assignedNum)) {
      sumOfPrimes += assignedNum;
    }
    assignedNum -= 1;
  }
  return sumOfPrimes;
}

export {
  sumPrimes,
};
