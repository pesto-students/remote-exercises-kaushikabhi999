import { limitFunctionCallCount } from './limitFunctionCallCount';

describe('limitFunctionCallCount', () => {
  it('should return a function', () => {
    expect(typeof limitFunctionCallCount()).toBe('function');
  });
  it('should return a wrapped version of the original function that can only be invoked n times', () => {
    const foo = () => (true);
    const limitedFunction = limitFunctionCallCount(foo, 2);
    expect(limitedFunction()).toBe(true);
    limitedFunction();
    expect(limitedFunction()).toBe(null);
  });
  it('should properly handle arguments in the wrapped function', () => {
    const foo = (x, y, z) => (x + y + z);
    const limitedFunction = limitFunctionCallCount(foo, 2);
    expect(limitedFunction(5, 10, 15)).toBe(30);
    limitedFunction(0, 0, 0);
    expect(limitedFunction()).toBe(null);
  });
});
