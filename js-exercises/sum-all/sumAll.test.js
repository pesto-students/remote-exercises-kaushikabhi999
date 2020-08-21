import { sumAll } from './sumAll';

describe('sumAll', () => {
  test('should return a number', () => {
    expect(typeof sumAll([1, 4])).toEqual('number');
  });
  test('should return correct number', () => {
    expect(sumAll([1, 4])).toBe(10);
    expect(sumAll([4, 1])).toBe(10);
    expect(sumAll([5, 10])).toBe(45);
    expect(sumAll([10, 5])).toBe(45);
    expect(sumAll([50, 11])).toBe(1220);
  });
});
