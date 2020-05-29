const minima = (size, array) => array.sort((el1, el2) => el1 - el2).splice(0, size);

export { minima };
