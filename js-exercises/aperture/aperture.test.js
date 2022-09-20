import { aperture } from './aperture';

describe('aperture', () => {
  const sevenLs = [1, 2, 3, 4, 5, 6, 7];
  it('creates a list of n-tuples from a list', () => {
    expect(aperture(1, sevenLs)).toEqual([[1], [2], [3], [4], [5], [6], [7]]);
    expect(aperture(2, sevenLs)).toEqual([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
    expect(aperture(3, sevenLs)).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7]]);
    expect(aperture(4, [1, 2, 3, 4])).toEqual([[1, 2, 3, 4]]);
  });

  it('returns an empty list when `n` > `list.length`', () => {
    expect(aperture(6, [1, 2, 3])).toEqual([]);
    expect(aperture(1, [])).toEqual([]);
  });

  it('throws an error when invalid argument passed', () => {
    expect(() => aperture(6, 1)).toThrowError(new TypeError('You must provide valid arguments.'));;
    expect(() => aperture([], 1)).toThrowError(new TypeError('You must provide valid arguments.'));;
  });
});
