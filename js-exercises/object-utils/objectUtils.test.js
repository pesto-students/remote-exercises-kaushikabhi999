import { map, filter, invert, merge, every, some } from './objectUtils';

describe("test the case of map() function", () => {
  test("return the object with key in uppercase and value multiple of 10", () => {
    const obj = { 'a': 10 };
    const expected = { 'A': 100 }
    const result = map(obj, ([key, val]) => [key.toUpperCase(), val * 10]);
    expect(result).toEqual(expected);
  });
});

describe("test the case of filter() function", () => {
  test("return the object with filtered key and value pair", () => {
    const obj = { 'name': 'Amit', 'age': 26 };
    const expected = { 'name': 'Amit' }
    const result = filter(obj, ([key, val]) => key === 'name');
    expect(result).toEqual(expected);
  });
});

describe("test the case of invert() function", () => {
  test("return the object with inverted key and value pair", () => {
    const obj = { name: 'Amit', age: 28 };
    const expected = { Amit: 'name', 28: 'age' }
    expect(invert(obj)).toEqual(expected);
  });
});

describe("test the case of merge() function", () => {
  test("return the object with inverted key and value pair", () => {
    const objects = [{ name: 'Amit', age: 28 }, { profession: 'Software', location: 'delhi' }];
    const expected = { name: 'Amit', age: 28, profession: 'Software', location: 'delhi' };
    expect(merge(objects)).toEqual(expected);
  });
});

describe("test the case of every() function", () => {
  test("return boolean, true if all values satisfied the condition", () => {
    const array1 = [10, 5, 20, 6, 33, 70];
    const array2 = [58, 29, 10, 90, 33, 72];
    const cb = (val) => val >= 10;
    expect(every(array1, cb)).toBe(false);
    expect(every(array2, cb)).toBe(true);
  });
});

describe("test the case of some() function", () => {
  test("return boolean, true if atleast values satisfied the condition", () => {
    const array1 = [10, 5, 20, 6, 33, 70];
    const array2 = [58, 29, 10, 90, 33, 72];
    const cb = (val) => val < 10;
    expect(some(array1, cb)).toBe(true);
    expect(some(array2, cb)).toBe(false);
  });
});
