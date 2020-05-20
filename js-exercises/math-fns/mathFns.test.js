import { sqrt, power, round } from './mathFns';

describe('Use Math functions', () => {
  test('should use the math functions to get correct values', () => {
    expect(sqrt(49)).toBe(7);
    expect(power(2, 4)).toBe(16);
    expect(round(7.4)).toBe(7);
  });
  test('test others values to get correct values', () => {
    expect(sqrt(15625)).toBe(125);
    expect(power(5, 5)).toBe(3125);
    expect(round(74.985)).toBe(75);
    expect(round(74.185)).toBe(74);
  });
});
