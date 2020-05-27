import { balancedBraces } from './balancedBraces';

describe('Braces / Brackets / Parentheses', () => {
  test('should tell correctly whether braces opened and closed properly', () => {
    expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(true);
    expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}')).toBe(false);
    expect(balancedBraces('for(i=0;i<x[[i];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(false);
    expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10{b++;}else{b+=10;}}')).toBe(false);
    expect(balancedBraces('for[(i=0;i<xi];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(false);
    expect(balancedBraces('for(i=0;i<x[i];i++)({ifx[i]<10){b++;}else{b+=10;}}')).toBe(false);
  });
});
