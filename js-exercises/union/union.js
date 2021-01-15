Object.compare = (obj1, obj2, iterateObj1 = true) => {
  if (iterateObj1 && typeof obj1 !== 'undefined') {
    for (const [key] of Object.getOwnPropertyNames(obj1)) {
      switch (typeof obj1[key] === 'object' && obj1[key] !== null) {
        case true:
          if (!Object.compare(obj1[key], obj2[key])) {
            return false;
          }
          break;
        default:
          if (!Object.is(obj1[key], obj2[key])) {
            return false;
          }
          // eslint-disable-next-line max-len
          if ((!Object.prototype.hasOwnProperty.call(obj1, key) && Object.prototype.hasOwnProperty.call(obj2, key)) || (Object.prototype.hasOwnProperty.call(obj1, key) && !Object.prototype.hasOwnProperty.call(obj2, key))) {
            return false;
          }
      }
    }
    for (const sym of Object.getOwnPropertySymbols(obj1)) {
      if (!Object.is(obj1[sym], obj2[sym])) {
        return false;
      }
    }
  }
  if (typeof obj2 !== 'undefined') {
    for (const [key] of Object.getOwnPropertyNames(obj2)) {
      switch (typeof (obj2[key]) === 'object' && obj1[key] !== null) {
        case true:
          if (!Object.compare(obj2[key], obj1[key], false)) {
            return false;
          }
          break;
        default:
          if (typeof obj1[key] === 'undefined' && typeof obj2[key] !== 'undefined') return false;
      }
    }
  }
  return true;
};

Array.unique = (array) => {
  const uniqueElements = [];
  for (const el of array) {
    let elNotExists = true;
    for (const el2 of uniqueElements) {
      if (typeof el === 'object' && Object.compare(el, el2)) {
        elNotExists = false;
      }
      if (Object.is(el, el2)) {
        elNotExists = false;
      }
      break;
    }
    if (elNotExists && el !== undefined) {
      uniqueElements.push(el);
    }
  }
  return uniqueElements;
};

const union = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('You must provide valid arguments.');
  }

  const uniqueArr1 = Array.unique(arr1);
  const uniqueArr2 = Array.unique(arr2);
  const filteredArr = uniqueArr2.filter((arr2El) => {
    if (typeof arr2El === 'object') {
      let noObjectFound = true;
      let ObjectNotMatched = true;
      for (const arr1El of uniqueArr1) {
        if (typeof arr1El === 'object') {
          noObjectFound = false;
          if (Object.compare(arr1El, arr2El)) {
            ObjectNotMatched = false;
          }
        }
      }
      if (noObjectFound || ObjectNotMatched) {
        return arr2El;
      }
      return false;
    }
    for (const arr1El of uniqueArr1) {
      if (Object.is(arr1El, arr2El)) {
        return false;
      }
    }
    return true;
  });
  const unionArr = [
    ...uniqueArr1,
    ...filteredArr,
  ];

  return unionArr;
};

export {
  union,
};
