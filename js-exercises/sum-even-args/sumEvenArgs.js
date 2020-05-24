function getSumEvenArgs(sum, num) {
  if (sum % 2 === 0) {
    return num % 2 === 0 ? sum + num : sum;
  }
  return num % 2 === 0 ? num : 0;
}
const sumEvenArgs = (...args) => args.reduce(getSumEvenArgs);

export { sumEvenArgs };
