import { lastIndexOf } from './lastIndexOf';

describe('lastIndexOf', () => {
  it("returns a number indicating an object's last position in a list", () => {
    const list = [0, 10, 20, 30, 0, 10, 20, 30, 0, 10];
    expect(lastIndexOf(30, list)).toBe(7);
  });
  it('returns -1 if the object is not in the list', () => {
    const list = [0, 10, 20, 30];
    expect(lastIndexOf(40, list)).toBe(-1);
  });

  const input = [1, 2, 3, 4, 5, 1];
  it('returns the last index of the first item', () => {
    expect(lastIndexOf(1, input)).toBe(5);
  });
  it('returns the index of the last item', () => {
    expect(lastIndexOf(5, input)).toBe(4);
  });

  const list = ['a', 1, 'a'];
  list[-2] = 'a'; // Throw a wrench in the gears by assigning a non-valid array index as object property.

  it('finds a', () => {
    expect(lastIndexOf('a', list)).toBe(2);
  });
  it('does not find c', () => {
    expect(lastIndexOf('c', list)).toBe(-1);
  });
  it('does not consider "1" equal to 1', () => {
    expect(lastIndexOf('1', list)).toBe(-1);
  });
  it('returns -1 for an empty array', () => {
    expect(lastIndexOf('x', [])).toBe(-1);
  });

  it('finds function, compared by identity', () => {
    const f = () => {};
    const g = () => {};
    const list1 = [g, f, g, f];
    expect(lastIndexOf(f, list1)).toBe(3);
  });

  it('does not find function, compared by identity', () => {
    const f = () => {};
    const g = () => {};
    const h = () => {};
    const list2 = [g, f];
    expect(lastIndexOf(h, list2)).toBe(-1);
  });
});
