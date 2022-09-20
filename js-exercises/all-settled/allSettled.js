const allSettled = promisesArr => {
  if (!Array.isArray(promisesArr)) {
    throw new Error('An array of promises expected');
  }

  if (!promisesArr.length) return Promise.resolve([]);

  return new Promise((resolve) => {
    const resolvesArr = [];
    promisesArr.map((promise, index) => Promise.resolve(promise)
      .then((result) => {
        resolvesArr.push({ status: 'fulfilled', value: result });
        if (index === promisesArr.length - 1) {
          resolve(resolvesArr);
        }
      })
      .catch((error) => {
        resolvesArr.push({ status: 'rejected', reason: new Error(error) });
        if (index === promisesArr.length - 1) {
          resolve(resolvesArr);
        }
      }));
  });
};
export { allSettled };
