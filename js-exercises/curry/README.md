Here's the basic usage of the function that you'll be creating:

function add(a, b) {
  return a + b;
}
```js
const curriedAdd = curry(add); // <- this is the curry function
console.log( curriedAdd(1)(2) ); // 3
```
See 'curry' tests for further info of the requirement

Read more about it here - [Currying](https://en.wikipedia.org/wiki/Currying)