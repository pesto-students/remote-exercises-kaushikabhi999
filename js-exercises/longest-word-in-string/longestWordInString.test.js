import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  test('should return a number', () => {
    expect(typeof longestWordInString('some hello')).toBe('number');
  });
  test('should return the correct solution', () => {
    expect(longestWordInString('The quick brown fox jumped over the lazy dog')).toBe(6);
    expect(longestWordInString('May the force be with you')).toBe(5);
    expect(longestWordInString('What if we try a super-long word such as otorhinolaryngology')).toBe(19);
  });
});
