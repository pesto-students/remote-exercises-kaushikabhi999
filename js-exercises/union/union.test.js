import { union } from './union';

describe('union', () => {
  describe('error handling', () => {
    test('null', () => {
      expect(() => union(null, null)).toThrowError();
      expect(() => union(null, {})).toThrowError();
      expect(() => union([], null)).toThrowError();
    });
    test('undefined', () => {
      expect(() => union(undefined, undefined)).toThrowError();
      expect(() => union(undefined, [])).toThrowError();
      expect(() => union({}, undefined)).toThrowError();
    });
    test('invalid objects', () => {
      expect(() => union({ length: 3 }, { length: 5 })).toThrowError();
      expect(() => union({ length: 3 }, [])).toThrowError();
    });
    test('fake array objects (instanceof vs Array.isArray)', () => {
      const obj = { __proto__: Array.prototype };
      expect(() => union([1, 2], obj)).toThrowError();
    });
    test('mix types', () => {
      expect(() => union(undefined, null)).toThrowError();
      expect(() => union('', 5)).toThrowError();
      expect(() => union('', [])).toThrowError();
    });
  });

  describe('primitives', () => {
    describe('edge-cases', () => {
      test('NaN', () => {
        expect(union([NaN], [NaN])).toStrictEqual([NaN]);
      });
      test('Infinity', () => {
        expect(union([Infinity, Infinity], [Infinity])).toStrictEqual([
          Infinity,
        ]);
      });
      test('0, -0', () => {
        expect(union([0], [-0])).toStrictEqual([0, -0]);
        expect(union([-0], [0])).toStrictEqual([-0, 0]);
        expect(union([-0], [-0])).toStrictEqual([-0]);
      });
    });
    test('of the same type', () => {
      const M = Object.freeze([1, 2, 3, 4]);
      const N = Object.freeze([3, 4, 5, 6]);
      expect(union(M, N)).toStrictEqual([1, 2, 3, 4, 5, 6]);
      expect(union(['a'], ['b'])).toStrictEqual(['a', 'b']);
    });
    test('multiple types', () => {
      expect(union([1], ['1', 1])).toStrictEqual([1, '1']);
    });
    test('repeated elements in both', () => {
      expect(union([1, 1, 1], [2, 2, 2])).toStrictEqual([1, 2]);
    });
  });

  describe('when lists contain objects and primitives', () => {
    test('structurally same objects', () => {
      expect(union([{ a: { b: 10 } }], [{ a: { b: 10 } }])).toEqual([
        { a: { b: 10 } },
      ]);
    });
    test('takes care of `undefined` values in different objects', () => {
      expect(
        union([{ a: { b: 10, c: undefined } }], [{ a: { b: 10 } }])
      ).toStrictEqual([{ a: { b: 10, c: undefined } }, { a: { b: 10 } }]);
    });
    test('takes care of non-enumerable properties', () => {
      const obj1 = { a: 10 };
      Object.defineProperty(obj1, 'test', { value: 5 });

      const obj2 = {};
      Object.defineProperty(obj2, 'test', { value: 5 });

      const expected = {};
      Object.defineProperty(expected, 'test', { value: 5 });

      expect(union([obj1, expected], [obj2])).toStrictEqual([obj1, expected]);
    });

    test('same objects with special primitive values', () => {
      expect(union([{ a: NaN }], [{ a: NaN }])).toStrictEqual([{ a: NaN }]);
      expect(union([{ a: NaN }], [{ a: Infinity }])).toStrictEqual([
        { a: NaN },
        { a: Infinity },
      ]);
    });

    test('same objects multiple times', () => {
      expect(union([{}, {}, {}], [])).toStrictEqual([{}]);
    });

    test('arrays as objects', () => {
      expect(union([[1, 2, 3, NaN]], [[5, 6, Infinity]])).toStrictEqual([
        [1, 2, 3, NaN],
        [5, 6, Infinity],
      ]);
      expect(union([[null, null]], [[undefined, null]])).toStrictEqual([
        [null, null],
        [undefined, null],
      ]);
    });

    test('different objects with special primitive values', () => {
      expect(union([{ a: NaN }], [{ b: NaN }])).toStrictEqual([
        { a: NaN },
        { b: NaN },
      ]);
    });

    test('different objects with primitive values', () => {
      expect(union([{ a: { b: 10 } }], [{ a: { b: 20 } }])).toStrictEqual([
        { a: { b: 10 } },
        { a: { b: 20 } },
      ]);
    });
  });

  describe('Bonus test case', () => {
    describe('symbols', () => {
      test('same symbol, diff value', () => {
        const sym = Symbol();

        expect(union([{ [sym]: 10 }], [{ [sym]: 20 }])).toStrictEqual([
          { [sym]: 10 },
          { [sym]: 20 },
        ]);
      });
      test('different symbols, same value', () => {
        const sym1 = Symbol();
        const sym2 = Symbol();

        expect(union([{ [sym1]: 10 }], [{ [sym2]: 10 }])).toStrictEqual([
          { [sym1]: 10 },
          { [sym2]: 10 },
        ]);
      });
    });

    describe('holey arrays', () => {
      test('holey arrays', () => {
        const arr1 = new Array(2);
        const arr2 = new Array(2);
        expect(union(arr2, arr1)).toStrictEqual([]);
      });
    });
  });

  test('union of two arrys containing numbers', () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(union([1, 3, 5], [2, 4, 6])).toEqual([1, 3, 5, 2, 4, 6]);
  });
  test('union of two arrys containing strings', () => {
    expect(union(['a'], ['b'])).toEqual(['a', 'b']);
  });
  test('union of two arrys containing strings and numbers', () => {
    expect(union([1], ['1', 1])).toEqual([1, '1']);
  });
  test('union of two arrys containing objects', () => {
    expect(union([{ a: { b: 10 } }], [{ a: { b: 20 } }])).toEqual([{ a: { b: 10 } }, { a: { b: 20 } }]);
    expect(union([{ a: { b: 10 } }], [{ a: { b: 10 } }])).toEqual([{ a: { b: 10 } }]);
    expect(union([{ a: { b: 10, c: undefined } }], [{ a: { b: 10, c: undefined } }])).toEqual([{ a: { b: 10 } }]);
  });
  test('union of two arrys containing objects and number', () => {
    expect(union([1], [{ a: { b: 10 } }])).toEqual([1, { a: { b: 10 } }]);
  });
});
