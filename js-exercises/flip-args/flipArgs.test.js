// write your own test cases
import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });

  it('the flipArgs should return reversed params', () => {
    const sub = (x, y) => x - y;
    const flipFunction = flipArgs(sub);
    expect(flipFunction(3, 5)).toBe(2);
  });
});
