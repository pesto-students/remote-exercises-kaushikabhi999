import { onChange } from './onChange';

describe('onChange', () => {
  test('main', () => {
    const fixture = {
      foo: false,
      bar: {
        a: {
          b: 0,
          c: [1, 2],
        },
      },
    };

    let callCount = 0;

    const object = onChange(fixture, () => {
      callCount += 1;
    });

    object.foo = true;
    expect(callCount).toBe(1);

    Object.defineProperty(object, 'newProp', {
      value: '🦄',
    });
    expect(callCount).toBe(2);

    Object.assign(object, {
      foo: false,
    });
    expect(callCount).toBe(3);

    delete object.foo;
    expect(callCount).toBe(4);

    object.bar.a.b = 1;
    expect(object.bar.a.b).toBe(1);
    expect(callCount).toBe(5);

    object.bar.a.c[2] = 5;
    expect(object.bar.a.c[2]).toBe(5);
    expect(callCount).toBe(6);
  });

  test('works with an array too', () => {
    const fixture = [1, 2, {
      a: false,
    }];

    let callCount = 0;

    const array = onChange(fixture, () => {
      callCount += 1;
      return callCount;
    });

    array[0] = 'a';
    expect(array).toEqual(['a', 2, {
      a: false,
    }]);
    expect(callCount).toBe(1);

    array[2].a = true;
    expect(callCount).toBe(2);

    array.sort();
    expect(callCount).toBe(5);

    array.pop();
    expect(callCount).toBe(7);
  });
});
