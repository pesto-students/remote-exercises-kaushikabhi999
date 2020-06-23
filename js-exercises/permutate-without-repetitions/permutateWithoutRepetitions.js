/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
  if (!Array.isArray(permutationOptions)) {
    throw new TypeError(`${typeof permutationOptions} should be an array`);
  }

  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  const permutations = [];

  // Exclude the first element and get all possible permutations for rest permutationOptions.
  const restPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));
  const firstElement = permutationOptions[0];

  for (const permutation of restPermutations) {
    // Insert first element into every possible position of permutation.
    for (let i = 0; i <= permutation.length; i += 1) {
      const prefixOfPermutation = permutation.slice(0, i);
      const suffixOfPermutation = permutation.slice(i);
      permutations.push(prefixOfPermutation.concat([firstElement], suffixOfPermutation));
    }
  }

  return permutations;
}

export { permutateWithoutRepetitions };
