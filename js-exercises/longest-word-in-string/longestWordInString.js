function longestWordInString(str) {
  const words = str.split(' ');
  let lengthOfLongestWord = 0;
  for (const word of words) {
    lengthOfLongestWord = word.length > lengthOfLongestWord ? word.length : lengthOfLongestWord;
  }
  return lengthOfLongestWord;
}

export { longestWordInString };
