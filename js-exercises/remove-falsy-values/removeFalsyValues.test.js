import { removeFalsyValues } from './removeFalsyValues';

describe('removeFalsyValues', () => {
  test('should remove all falsy values from an array.', () => {
    expect(removeFalsyValues([7, 'ate', '', false, 9])).toEqual([7, 'ate', 9]);
    expect(removeFalsyValues(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(removeFalsyValues([false, null, 0, NaN, undefined, ''])).toEqual([]);
    expect(removeFalsyValues([1, null, NaN, 2, undefined])).toEqual([1, 2]);
  });
});
