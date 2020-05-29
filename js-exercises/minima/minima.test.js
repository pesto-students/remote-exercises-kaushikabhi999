import { minima } from "./minima";

describe("minima", () => {
  test("return the first k elements of the sorted array", () => {
    expect(minima(2, [5, 3, 4])).toEqual([3, 4]);
    expect(minima(3, [5, 3, 4, 6, 10, 1])).toEqual([1, 3, 4]);
  });
});
