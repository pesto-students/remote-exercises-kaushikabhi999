# Instructions

You need to implement three iterators.

## count(start, [step])
- The input is `start, [step]` where `start` is the value where to count from.
  - An optional step is allowed.

```js
count(10)
// ...
// 10 11 12 13 14 ...
```

## cycle(iter, [n])
Takes an iterator and cycles infinitely.
- It also takes an optional `n` number of times.

```js
cycle('ABCD') --> A B C D A B C D ...
```

## repeat(value, [n])
Takes a value and repeats infinitely if `n` is not given. Otherwise, `n` times.

```js
repeat(10, 3) --> // 10 10 10
```