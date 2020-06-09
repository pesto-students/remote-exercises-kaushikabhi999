import { fibonacciIter } from './fibonacciIter';

describe('fibonacciIter', () => {
  test('should be an iterable', () => {
    const iterator = fibonacciIter[Symbol.iterator]();
    expect(typeof fibonacciIter[Symbol.iterator]).toBe('function');
    expect(typeof iterator.next).toBe('function');
    expect(iterator.next()).toHaveProperty('value');
    expect(iterator.next()).toHaveProperty('done');
  });

  test('should return fibonacciIter series', () => {
    const iterator = fibonacciIter[Symbol.iterator]();
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe(3);
    expect(iterator.next().value).toBe(5);
    expect(iterator.next().value).toBe(8);
    expect(iterator.next().value).toBe(13);
    expect(iterator.next().value).toBe(21);
    expect(iterator.next().value).toBe(34);
    expect(iterator.next().value).toBe(55);
    expect(iterator.next().value).toBe(89);
    expect(iterator.next().value).toBe(144);
  });
});
