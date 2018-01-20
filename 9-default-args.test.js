const makeImportant = require('./9-default-args');

test('Ideal case', () => {
  expect(makeImportant('a')).toBe('a!');
  expect(makeImportant('abc')).toBe('abc!!!');

  expect(makeImportant('abc', 1)).toBe('abc!');
  expect(makeImportant('abc', 4)).toBe('abc!!!!');
});

test('Empty string', () => {
  expect(makeImportant('')).toBeFalsy();
});
