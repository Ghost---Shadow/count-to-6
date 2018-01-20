const q6 = require('./6-spread');

test('Ideal case', () => {
  const inputArray = [98, 42, 71, 31, 72];
  const expectation = 'The minimum of [98,42,71,31,72] is 31';
  expect(q6.demoSpread(inputArray)).toBe(expectation);
});

test('Empty array', () => {
  const inputArray = [];
  const expectation = '';
  expect(q6.demoSpread(inputArray)).toBe(expectation);
});

