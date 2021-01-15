# Instructions

`pathSatisfies` returns `true` if the specified object property at given "path" satisfies the
given predicate; `false` otherwise. _The word "path" here is used in a strict sense._ See the examples below to understand it.

## Specification
- Throw an `Error` with relevant message for any combination of wrong parameters/types.
- Take property delegation into account. For example, `toString` is a valid path for a new object even though the property does not exist in the 'own' object but exists in the prototype chain. Here's a code sample,
  ```js
  pathSatisfies((el) => typeof el === 'function', ['toString'], {})
  // true
  ```

### Parameters
`pathSatisfies` accepts 3 params.
1. a predicate function
2. an array containing the name of the keys (aka. the path)
  - It will always contain elements of string type.
3. **Any** object for which the path may be satisfied.

### Return
A boolean value denoting whether the value satisfied the predicate.

### Examples
```js
pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}});
//=> true

pathSatisfies((el) => typeof el === 'function', ['toString'], {})
// true

pathSatisfies(y => typeof y === 'number', ['x', 'y'], {x: {y: 'mukesh' }})
// false
```

## Restrictions
- No external library can be used to do this.
- You also cannot use any Node-specific APIs like `fs`, `util` etc.
