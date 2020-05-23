function diffArray(firstArr, secondArr) {
  return [
    ...firstArr.filter(firstArrvalue => !secondArr.includes(firstArrvalue)),
    ...secondArr.filter(secondArrvalue => !firstArr.includes(secondArrvalue)),
  ];
}

export {
  diffArray,
};
