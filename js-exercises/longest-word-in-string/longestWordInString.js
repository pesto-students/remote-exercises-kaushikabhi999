function longestWordInString(str) {
  const words = str.split(' ');
  const lengths = words.map(({ length }) => length);
  return Math.max(...lengths);
}

export { longestWordInString };
