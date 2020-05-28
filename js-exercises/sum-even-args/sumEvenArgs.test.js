import { sumEvenArgs } from './sumEvenArgs';

describe('sumEvenArgs', () => {
  test('returns the sum of even arguments passed to the function', () => {
    expect(sumEvenArgs(1, 2, 3, 4, 5)).toBe(6);
    expect(sumEvenArgs(1, 2, 3, 4, 5, 6)).toBe(12);
    expect(sumEvenArgs(1, 3, 5, 7, 9)).toBe(0);
  });
});
