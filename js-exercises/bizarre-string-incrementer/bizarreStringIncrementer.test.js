import { bizarreStringIncrementer } from './bizarreStringIncrementer';

describe('bizarreStringIncrementer', () => {
  it('bizarreStringIncrementer adds the number 1 if string does not end in a number', () => {
    expect(bizarreStringIncrementer('foo')).toEqual('foo1');
  });

  it('bizarreStringIncrementer increments by 1 the number if the string ends with a number', () => {
    expect(bizarreStringIncrementer('foo23')).toEqual('foo24');
  });

  it('bizarreStringIncrementer considers leading zeros when incrementing', () => {
    expect(bizarreStringIncrementer('foo0041')).toEqual('foo0042');
  });

  it('bizarreStringIncrementer increments by one even when number of digits increase', () => {
    expect(bizarreStringIncrementer('foo9')).toEqual('foo10');
  });

  it('bizarreStringIncrementer fills leading zeros', () => {
    expect(bizarreStringIncrementer('foo099')).toEqual('foo100');
  });

  it('bizarreStringIncrementer looks at only the last digits', () => {
    expect(bizarreStringIncrementer('f99oo')).toBe('f99oo1');
    expect(bizarreStringIncrementer('f99oo23')).toBe('f99oo24');
    expect(bizarreStringIncrementer('f99oo099')).toBe('f99oo100');
  });

  it('should always pad the only the leading zeroes', () => {
    expect(bizarreStringIncrementer('f99oo0099')).toBe('f99oo0100');
  });
});
