import { count, cycle, repeat } from './iterInfinite';

describe('tests the iterators', () => {
  test('testing the count function, without the step param', () => {
    const exp = count(10);
    expect(exp.next().value).toBe(10)
    expect(exp.next().value).toBe(11)
    expect(exp.next().value).toBe(12)
    expect(exp.next().value).toBe(13)
    expect(exp.next().value).toBe(14)
    expect(exp.next().value).toBe(15)
    expect(exp.next().value).toBe(16)
    expect(exp.next().value).toBe(17)
    expect(exp.next().value).toBe(18)
    expect(exp.next().value).toBe(19)
    expect(exp.next().value).toBe(20)
  });
  test('testing the count function, with step', () => {
    const exp = count(10, 5);
    expect(exp.next().value).toBe(10);
    expect(exp.next().value).toBe(15);
    expect(exp.next().value).toBe(20);
    expect(exp.next().value).toBe(25);
    expect(exp.next().value).toBe(30);
  });
  test('testing the count function, with step', () => {
    const exp = count(10, -5);
    expect(exp.next().value).toBe(10);
    expect(exp.next().value).toBe(5);
    expect(exp.next().value).toBe(0);
    expect(exp.next().value).toBe(-5);
    expect(exp.next().value).toBe(-10);
  });
  test('testing the count function, with step', () => {
    const exp = count(10, undefined);
    expect(exp.next().value).toBe(10);
    expect(exp.next().value).toBe(11);
  });
  test('testing the cycle function, without limit on looping times', () => {
    const fn = cycle([1, 2, 3, 4]);
    expect(fn.next().value).toBe(1);
    expect(fn.next().value).toBe(2);
    expect(fn.next().value).toBe(3);
    expect(fn.next().value).toBe(4);
    expect(fn.next().value).toBe(1);
    expect(fn.next().value).toBe(2);
    expect(fn.next().value).toBe(3);
    expect(fn.next().value).toBe(4);
    expect(fn.next().value).toBe(1);
    expect(fn.next().value).toBe(2);
    expect(fn.next().value).toBe(3);
    expect(fn.next().value).toBe(4);
  })
  test('testing the cycle function, with limit on looping', () => {
    const fn = cycle([1, 2, 3], 6);
    expect(fn.next().value).toBe(1);
    expect(fn.next().value).toBe(2);
    expect(fn.next()).toStrictEqual({ value: 3, done: false });
    expect(fn.next()).toStrictEqual({ value: 1, done: false });
    expect(fn.next().value).toBe(2);
    expect(fn.next().value).toBe(3);
    expect(fn.next().value).toBe(undefined);
    expect(fn.next().done).toBe(true);
  });
  test('testing repeat function', () => {
    const fn = repeat(10);
    expect(expect(fn.next()).toStrictEqual({ value: 10, done: false }));
    expect(expect(fn.next()).toStrictEqual({ value: 10, done: false }));
    expect(fn.next().value).toBe(10);
    expect(fn.next().value).toBe(10);
  });
  test('testing repeat function, with limit', () => {
    const fn = repeat(10, 3);
    expect(fn.next().value).toBe(10);
    expect(fn.next().value).toBe(10);
    expect(fn.next()).toStrictEqual({ value: 10, done: false });
    expect(fn.next().value).toBe(undefined);
    expect(fn.next()).toStrictEqual({ value: undefined, done: true });
  });
})