import { pathSatisfies } from './pathSatisfies';

describe('pathSatisfies', () => {
  const isPositive = (n) => n > 0;

  describe('type checks', () => {
    test('should throw when the predicate in not a function', () => {
      expect(() => pathSatisfies(undefined, [], {})).toThrow();
      expect(() => pathSatisfies(5, [], {})).toThrow();
      expect(() => pathSatisfies(function () { }, [], {})).not.toThrow();
    });
    test('should throw when the path is not an array', () => {
      expect(() => pathSatisfies(isPositive, undefined, {})).toThrow();
      expect(() => pathSatisfies(isPositive, {}, {})).toThrow();
      expect(() => pathSatisfies(isPositive, [], {})).not.toThrow();
    });
    test('should throw when the last operand is not an object', () => {
      expect(() => pathSatisfies(isPositive, [], {})).not.toThrow();
      expect(() => pathSatisfies(isPositive, [], [])).not.toThrow();
      expect(() => pathSatisfies(isPositive, [], function () { })).not.toThrow();
      expect(() => pathSatisfies(isPositive, [], undefined)).toThrow();
      expect(() => pathSatisfies(isPositive, [], 5)).toThrow();
    });
    test('fake array objects (instanceof vs Array.isArray)', () => {
      const obj = { __proto__: Array.prototype };
      expect(() => pathSatisfies(() => { }, obj, {})).toThrowError();
    });
  });

  describe('when the path exists', () => {
    /**
     * Functions, Arrays, and normal objects
     * are objects in JavaScript. All of them can have custom properties.
     * Hence, all should be acceptable.
     */
    test('in plain objects', () => {
      expect(
        pathSatisfies(isPositive, ['x', '1', 'y'], { x: [{ y: -1 }, { y: 1 }] })
      ).toBe(true);
    });
    test('in arrays', () => {
      expect(pathSatisfies((el) => el === 5, ['0', 'x'], [{ x: 5 }])).toBe(
        true
      );
    });
    test('in functions (as objects)', () => {
      const fn = function () { };
      fn.xyz = fn;
      expect(
        pathSatisfies((el) => typeof el === 'function', ['xyz'], fn)
      ).toBe(true);
    });
    test('in prototypal chain', () => {
      /**
       * Since toString present in Object.prototype
       * from which new objects by default inherit.
       */
      expect(
        pathSatisfies((el) => typeof el === 'function', ['toString'], {})
      ).toBe(true);
    });
  });

  describe('when the path does not exist', () => {
    test('in own object', () => {
      expect(pathSatisfies(isPositive, ['x', 'y'], { x: { z: 42 } })).toBe(
        false
      );
      expect(pathSatisfies(isPositive, ['x', 'y', 'z'], {})).toBe(false);
    });
    test('in prototypal chain', () => {
      /**
       * Since the path does not exist, either in the own object
       * or the prototypal chain, the result is false,
       * and the predicate should not be called as such.
       */
      const spyFn = jest.fn();
      const isFalsy = (el) => {
        spyFn();
        return !Boolean(el);
      };
      expect(pathSatisfies(isFalsy, ['x'], {})).toBe(false);
      expect(spyFn).not.toHaveBeenCalled();
    });
  });

  it('returns false if the path array is empty', () => {
    expect(pathSatisfies(isPositive, [], { x: { z: 42 } })).toBe(false);
  });

  it('returns output of predicate', () => {
    expect(pathSatisfies(isPositive, ['x', 'y'], { x: { y: 0 } })).toBe(false);
  });
});

describe('check if path satifies the condition', () => {
  test('toString should be a function', () => {
    const result = pathSatisfies((el) => typeof el === 'function', ['toString'], {});
    expect(result).toBe(true);
  });
  test('check value of y should be greater then zero', () => {
    const result = pathSatisfies(y => y > 0, ['x', 'y'], { x: { y: 2 } });
    expect(result).toBe(true);
  });
  test('check value of y should be a number', () => {
    const result = pathSatisfies(y => typeof y === 'number', ['x', 'y'], { x: { y: 'mukesh' } });
    expect(result).toBe(false);
  });
  test('should throw an error if valid arguments not passed', () => {
    expect(() => pathSatisfies(45, ['x', 'y'], { x: { y: 'mukesh' } })).toThrow();
    expect(() => pathSatisfies((el) => typeof el === 'function', ['toString'], 'obj')
    ).toThrowError(new Error('You must provide valid arguments.'));
    expect(() => pathSatisfies([y => 0], ['x', 'y'], { x: { y: 2 } })).toThrowError(new Error('You must provide valid arguments.'));
  });
});
