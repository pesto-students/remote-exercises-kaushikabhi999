function sumAll(numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const totalDigits = max - min + 1;
  return (totalDigits * (max + min)) / 2;
}

export {
  sumAll,
};
