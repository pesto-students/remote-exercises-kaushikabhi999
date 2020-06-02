# Instructions

The `allSettled` method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

## Examples 

```js
allSettled([
  Promise.resolve(33),
  new Promise(resolve => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error('an error'))
])
.then(values => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"

```

# Restrictions
- Don't use `Promise.allSettled` or `Promise.all`
- You can use built-in `Promise` constructor.