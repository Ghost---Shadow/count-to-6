const makeImportant = require('./9-default-args');

describe('Ideal case', () => {
  it('Length 1', () => expect(makeImportant('a')).toBe('a!'));
  it('Length 3', () => expect(makeImportant('abc')).toBe('abc!!!'));

  it('Exclamations 1', () => expect(makeImportant('abc', 1)).toBe('abc!'));
  it('Exclamations 4', () => expect(makeImportant('abc', 4)).toBe('abc!!!!'));
});

describe('Empty string', () => {
  it('Length 0', () => expect(makeImportant('')).toBeFalsy());
  it('Exclamations 5', () => expect(makeImportant('', 5)).toBe('!!!!!'));
});
