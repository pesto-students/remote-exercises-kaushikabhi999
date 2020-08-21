import { isTriangle } from './isTriangle';

describe('isTriangle', () => {
  it('should return true if triangle can be formed given three lines', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
  });

  it('should return false if triangle can not be formed given three lines', () => {
    expect(isTriangle(1, 4, 2)).toBe(false);
  });

  it('should return true if triangle can be formed given three lines', () => {
    expect(isTriangle(12, 5, 13)).toBe(true);
  });

  it('should return false if triangle can not be formed given three lines', () => {
    expect(isTriangle(1, 2, 3)).toBe(false);
  });

  it('should return true if triangle can be formed given three lines', () => {
    expect(isTriangle(7, 5, 10)).toBe(true);
  });
});
