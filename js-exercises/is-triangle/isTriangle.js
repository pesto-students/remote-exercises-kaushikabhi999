function isTriangle(a, b, c) {
  // Triangle Inequality Theorem, which states that the sum of two side lengths
  // of a triangle is always greater than the third side.
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}

export {
  isTriangle,
};
