const alternatingCharacters = strArr => strArr.map(string => {
  let charsToDelete = 0;
  for (const [index] of Object.entries(string)) {
    charsToDelete = string[index] === string[+index + 1] ? charsToDelete += 1 : charsToDelete;
  }
  return charsToDelete;
});

export { alternatingCharacters };
