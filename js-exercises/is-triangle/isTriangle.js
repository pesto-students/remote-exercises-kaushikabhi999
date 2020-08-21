function isTriangle(side1, side2, side3) {
  // Triangle Inequality Theorem, which states that the sum of two side lengths
  // of a triangle is always greater than the third side.
  return (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1);
}

export {
  isTriangle,
};
