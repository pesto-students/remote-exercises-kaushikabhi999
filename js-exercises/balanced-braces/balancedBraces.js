
function balancedBraces(string) {
  const brackets = '{}[]()';
  const stack = [];
  for (const bracket of string) {
    const bracketIndex = brackets.indexOf(bracket);
    if (bracketIndex % 2 === 0) {
      stack.push(bracketIndex + 1);
    } else if (bracketIndex !== -1 && stack.pop() !== bracketIndex) {
      return false;
    }
  }
  return stack.length === 0;
}

export {
  balancedBraces,
};
