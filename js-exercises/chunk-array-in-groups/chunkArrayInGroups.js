function chunkArrayInGroups(array, chunkSize) {
  const arrayChunksGroup = [];
  while (array.length > chunkSize) {
    arrayChunksGroup.push(array.splice(0, chunkSize));
  }
  if (array.length) arrayChunksGroup.push(array);
  return arrayChunksGroup;
}

export {
  chunkArrayInGroups,
};
