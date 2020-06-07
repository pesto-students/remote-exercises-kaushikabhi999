const alphabeticShift = alphabeticString => {
  let shiftedAlphabets = '';
  for (const [index] of Object.entries(alphabeticString)) {
    const ASCII = Number(alphabeticString.charCodeAt(index));
    const nextASCII = ASCII === 122 || ASCII === 90 ? ASCII - 25 : ASCII + 1;
    shiftedAlphabets += String.fromCharCode(nextASCII);
  }
  return shiftedAlphabets;
};

export { alphabeticShift };
