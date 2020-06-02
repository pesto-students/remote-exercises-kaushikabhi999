# Instructions

Implement a function `allPromises`. It has the same API(input, output, behaviour) as that of `Promise.all`.

## Examples

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

allPromises([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

# Restrictions

- If passed an array, should return an array of values from the promises
- DO NOT USE `Promise.all`
- You can use built-in `Promise` constructor.
