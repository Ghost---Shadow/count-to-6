const average = require('./7-rest');

test('Ideal case', () => {
  expect(average(1, 2, 3)).toBe(2);
  expect(average(0, 0, 0)).toBe(0);
  expect(average(1, 1, 3)).toBeCloseTo(5 / 3);
});

test('Empty array', () => {
  expect(average()).toBeFalsy();
});
