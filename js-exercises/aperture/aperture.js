function aperture(size, array) {
  if (!Array.isArray(array) || typeof size !== 'number') {
    throw new TypeError('You must provide valid arguments.');
  }
  if (size > array.length) return [];
  const newArraySize = array.length - size + 1;
  return [...Array(newArraySize)].reduce((result, _, i) => {
    result.push(array.slice(i, size + i));
    return result;
  }, []);
}

export { aperture };
