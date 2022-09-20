import { alternatingCharacters } from './alternatingCharacters';

describe('alternatingCharacters', () => {
  it('returns an array of integers representing the minimum number of deletions to make the alternating string for each string in array', () => {
    expect(alternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'])).toEqual([3, 4, 0, 0, 4]);
    expect(alternatingCharacters(['AAABBBAABB', 'AABBAABB', 'ABABABAA'])).toEqual([6, 4, 1]);
    expect(alternatingCharacters(['ABBABBAA'])).toEqual([3]);
    expect(alternatingCharacters(['ABABBABAAB', 'BABAABBAAB', 'AAAABBAAAA', 'BABBABABBA', 'AABBBBAAAA', 'BAAAABBBBB', 'BBABAAAABB', 'BBBAAABBAB', 'BABAAABBBB', 'AAAABAABBB'])).toEqual([2, 3, 7, 2, 7, 7, 5, 5, 5, 6])
  });
});
