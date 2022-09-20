# Instructions

Make a few object utilities as described below.

## map

`map` takes an object and transforms the (key, value) pair according to the callback function.

```js
map(obj, ([key, val]) => [key.toUpperCase(), val * 10]);
```
## filter

just like `filter` of array. Filters on the basis of keys or values.

```js
filter(obj, ([key, val]) => key === 'name');
```

## Invert
Inverts key value pairs.

## Merge
Merge n number of objects into a single object.

## every
Look at `Array.prototype.every`. Same concept for `every`.

## Some
Look at `Array.prototype.some`. Same concept for `some`.

### Restriction
- Don't use any extra library.
- You **CAN** use existing methods in JavaScript Standard Library.