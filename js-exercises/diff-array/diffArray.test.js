import { diffArray } from './diffArray';

describe('diffArray', () => {
  test('should return an array', () => {
    expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBe(true);
  });
  test('should return the correct expected array', () => {
    expect(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']))
      .toEqual(['pink wool']);

    expect(diffArray(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']))
      .toEqual([]);

    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
      .toEqual([4]);

    expect(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]))
      .toEqual(['piglet', 4]);

    expect(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']))
      .toEqual(['snuffleupagus', 'cookie monster', 'elmo']);

    expect(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']))
      .toEqual([1, 'calf', 3, 'piglet', 7, 'filly']);
  });
});
