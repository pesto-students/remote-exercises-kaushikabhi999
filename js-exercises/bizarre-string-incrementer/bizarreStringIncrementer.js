const bizarreStringIncrementer = string => {
  const matches = string.match(/\d+$/);
  if (matches) {
    const extractLastNumber = matches[0];
    const newNumber = (+extractLastNumber + 1).toString().padStart(extractLastNumber.length, '0');
    return string.replace(extractLastNumber, newNumber);
  }
  return `${string}1`;
};

export { bizarreStringIncrementer };
