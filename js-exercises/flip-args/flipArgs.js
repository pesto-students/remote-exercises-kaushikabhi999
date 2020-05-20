function flipArgs(cb) {
  return (...args) => cb(...args.reverse());
}

export {
  flipArgs,
};
