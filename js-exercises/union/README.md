# Instructions

Combines two lists into a set (i.e. no duplicates) composed of the elements of each list i.e a set union.

## Specifications

- Throw error with relevant message on any wrong type or wrong combination of parameters.
- Preserve the order of the elements. That is,
  ```js
  union([1], ['1', 1]);
  // => should return [1, '1']
  // => and not ['1', 1]
  ```
- You are free to utilize any feature of the language in any way possible.
  - It is recommended that you use ES6 or above features.

### Parameters

- Two lists(JS Arrays).
- The arrays can contain **_any_** kind of primitive JavaScript value and _plain_ objects (`{}`) or arrays(`[]`). The objects may contain nested objects/arrays. The arrays, recursively, may contain any primitive or plain objects values.
- The array will not contain any function, or objects containing functions.

### Return Value

The return value is a new list containing the union of both the lists.

### Example

```js
union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]

union(['a'], ['b']);
// => ['a', 'b']

union([1], ['1', 1]);
//=> [1, '1']

union([{ a: { b: 10 } }], [{ a: { b: 20 } }]);
//=> [{a: { b: 10 }}, {a: { b: 20 }}]

union([{ a: { b: 10 } }], [{ a: { b: 10 } }]);
//=> [{a: { b: 10 }}]
```

## Restrictions

- No external library can be used to do this.
- No usage of Node-specific APIs like `fs`, `util` etc.
