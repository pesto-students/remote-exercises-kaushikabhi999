const sumEvenArgs = (...args) => args.reduce((sum, num) => {
  if (sum % 2 === 0) {
    return num % 2 === 0 ? sum + num : sum;
  }
  return num % 2 === 0 ? num : 0;
});

export { sumEvenArgs };
