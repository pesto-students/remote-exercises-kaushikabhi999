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

function getFrequencyMap(array) {
  const frequencyMap = new Map();
  for (const el of array) {
    if (typeof el === 'object') {
      let objectNotFound = true;
      for (const [key] of frequencyMap) {
        if (Object.compare(el, key)) {
          const frequency = frequencyMap.get(key);
          frequencyMap.set(key, frequency + 1);
          objectNotFound = false;
        }
      }
      if (objectNotFound) {
        frequencyMap.set(el, 1);
      }
    } else if (frequencyMap.has(el)) {
      const frequency = frequencyMap.get(el);
      frequencyMap.set(el, frequency + 1);
    } else {
      frequencyMap.set(el, 1);
    }
  }
  return frequencyMap;
}

function freqSort(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('You must provide valid array.');
  }
  if (array.length < 2) return array;
  const frequencyMap = getFrequencyMap(array);

  frequencyMap[Symbol.iterator] = function* sort() {
    yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
  };
  const uniqueElementsArray = [];
  for (const [key] of frequencyMap) {
    uniqueElementsArray.push(key);
  }

  return uniqueElementsArray;
}

export {
  freqSort,
};
