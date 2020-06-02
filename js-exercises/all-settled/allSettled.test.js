import { allSettled } from './allSettled';

describe('allSettled', () => {
  test('The function should return a Promise', () => {
    expect(allSettled([Promise.resolve(1)]) instanceof Promise).toBe(true);
  });

  test('The function should throw an error', () => {
    const promise = Promise.resolve(1);

    return expect(() => allSettled(promise)).toThrowError(new Error('An array of promises expected'));
  });

  test('The function should resolve if argument is an empty array', () => {
    const promises = [];
    return expect(allSettled(promises)).resolves.toEqual([]);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise((res) => res(1));
    const p2 = 2;
    const p3 = Promise.resolve(3);
    return expect(allSettled([p1, p2, p3])).resolves.toEqual([
      {
        status: 'fulfilled',
        value: 1,
      },
      {
        status: 'fulfilled',
        value: 2,
      },
      {
        status: 'fulfilled',
        value: 3,
      },
    ]);
  });

  test('Promise call should return an array even if any of promises is rejected', () => {
    const p1 = new Promise((res) => res(1));
    const p2 = 2;
    const p3 = Promise.reject(3);

    return expect(allSettled([p1, p2, p3])).resolves.toEqual([
      {
        status: 'fulfilled',
        value: 1,
      },
      {
        status: 'fulfilled',
        value: 2,
      },
      {
        status: 'rejected',
        reason: new Error(3),
      },
    ]);
  });
});