import { curry } from './curry';

describe('curry', () => {
  test('curries the function at least once', () => {
    const add = curry((a, b) => {
      return a + b;
    });
    expect(add(1)(2)).toBe(3);
  });

  test('curries the function even with a single argument', () => {
    const output = curry((n) => {
      return n;
    });
    expect(output(1)).toBe(1);
  });

  test('curries the function until the arguments needed are given at least once', () => {
    const add = curry((a, b, c) => {
      return a + b + c;
    });
    console.log(typeof add);
    expect(add(1, 2)(3)).toBe(6);
  });

  test('curries the function until the arguments needed are given multiple times', () => {
    const add = curry((a, b, c) => {
      return a + b + c;
    });
    expect(add(1)(2)(3)).toBe(6);
  });

  test("doesn't share state between calls", () => {
    const add = curry((a, b, c) => {
      return a + b + c;
    });
    expect(add(1)(2)(3)).toBe(6);
    expect(add(2)(3)(4)).toBe(9);
  });

  test("doesn't only work with addition", () => {
    const merge = curry((a, b, c) => {
      return [a, b, c].join(', ');
    });
    expect(merge('1')(2)(3)).toBe('1, 2, 3');
  });

  test("doesn't share state between inner calls", () => {
    const add = curry((a, b, c, d) => {
      return a + b + c + d;
    });
    const firstTwo = add(1)(2);
    expect(firstTwo(3)(4)).toBe(10);
    const firstThree = firstTwo(5);
    expect(firstThree(6)).toBe(14);
  });
});
