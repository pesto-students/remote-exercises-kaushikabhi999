## Instructions

##### Q1: Use ES6 Proxy to implement the following function

```js 
  const object = {
    foo: false,
    a: {
      b: [
        {
          c: false
        }
      ]
    }
  };

  let i = 0;
  const watchedObject = onChange(object, () => {
    console.log('Object changed:', ++i);
  });

  watchedObject.foo = true;
  //=> 'Object changed: 1'

  watchedObject.a.b[0].c = true;
  //=> 'Object changed: 2'
```