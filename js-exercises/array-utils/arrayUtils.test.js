import { forEach, map, filter, reduce } from './arrayUtils';

describe('array utilities', () => {
  describe('forEach function', () => {
    test('should return the correct output', () => {
      const array = ['a', 'b', 'c', 'd'];
      const fn = (el) => el;
      expect(forEach(array, fn)).toEqual(array.length);
    });
  });
  describe('map function', () => {
    test('should return square', () => {
      const square = (num) => num * num;
      expect(map([1, 2, 3, 4], square)).toEqual([1, 4, 9, 16]);
    });
    test('should return cube', () => {
      const cube = (num) => num * num * num;
      expect(map([1, 2, 3, 4], cube)).toEqual([1, 8, 27, 64]);
    });
    test('should return the correct output', () => {
      const add1 = (num) => +num + 1;
      expect(map([1, 2, 3, 4], add1)).toEqual([2, 3, 4, 5]);
    });
  });
  describe('filter function', () => {
    test('should return filtered values', () => {
      const fn = (num) => num < 50;
      expect(filter([10, 52, 73, 44, 23], fn)).toEqual([10, 44, 23]);
    });
    test('should return cube', () => {
      const fn = (el) => el.length < 6;
      expect(filter(['amit', 'ajinkya', 'arfat', 'sandeep'], fn)).toEqual(['amit', 'arfat']);
    });
  });
  describe('reduce function', () => {
    test('should return the correct integer', () => {
      let currentValue = 0;
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      expect(reduce([1, 2, 3, 4], reducer, currentValue)).toEqual(10);
    });
    test('should return the correct output', () => {
      let currentValue = 0;
      const reducer = (accumulator, currentValue) => Math.max(accumulator, currentValue);
      expect(reduce([11, 26, 73, 34, 99, 67, 9], reducer, currentValue)).toEqual(99);
    });
  });
});