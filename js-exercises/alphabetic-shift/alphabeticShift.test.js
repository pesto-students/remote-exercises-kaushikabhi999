import { alphabeticShift } from './alphabeticShift';

describe('Alphabetic Shift Test Cases', () => {
  it('returns a shifted string', () => {
    expect(alphabeticShift('Pseudopseudohypoparathyroidism'))
      .toEqual('Qtfvepqtfvepizqpqbsbuizspjejtn');

    expect(alphabeticShift('Floccinaucinihilipilification'))
      .toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('Floccinaucinihilipilification'))
      .toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('AntidisestablishmentarianismZ'))
      .toEqual('BoujejtftubcmjtinfoubsjbojtnA');

    expect(alphabeticShift('supercalifragilisticexpialidociousz'))
      .toEqual('tvqfsdbmjgsbhjmjtujdfyqjbmjepdjpvta');
  });
});
