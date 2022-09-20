const allPromises = promisesArr => {
  if (!Array.isArray(promisesArr)) {
    throw new Error('An array of promises expected');
  }

  if (!promisesArr.length) return Promise.resolve([]);

  return new Promise((resolve, reject) => {
    const resolvesArr = [];
    promisesArr.map((promise, index) => Promise.resolve(promise)
      .then((result) => {
        resolvesArr.push(result);
        if (index === promisesArr.length - 1) {
          resolve(resolvesArr);
        }
      })
      .catch((error) => {
        reject(error);
      }));
  });
};

export { allPromises };
