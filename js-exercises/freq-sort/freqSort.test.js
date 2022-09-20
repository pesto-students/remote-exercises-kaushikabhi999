import { freqSort } from './freqSort';

describe('Sort an array by frequency and then filter repeats', () => {
  test('Alphabet Characters', () => {
    const array = ['a', 'z', 'z', 'z', 'b', 'b', 'z'];
    expect(freqSort(array)).toEqual(['z', 'b', 'a']);
  });

  test('should return an empty array', () => {
    const characterArray = [];
    const result = freqSort(characterArray);
    expect(Array.isArray(result)).toBe(true);
  });

  test('should return a single element array', () => {
    const characterArray = [1];
    expect(freqSort(characterArray)).toEqual([1]);
  });

  test('should return an sorted array of objects', () => {
    const objArray = [{ y: -1 }, { y: 1 }, { y: 1 }];
    expect(freqSort(objArray)).toEqual([{ y: 1 }, { y: -1 }])
  });

  test('should throw an error', () => {
    expect(() => freqSort({ x: 1, y: 2 })).toThrowError(new Error('You must provide valid array.'));
  })
});
