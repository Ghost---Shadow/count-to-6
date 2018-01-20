const q5 = require('./5-destructor');

test('Objects must be equal', () => {
  const inputArray = ['a', 'b', 'c', 'd', 'e'];
  const expectation = { username: 'b', email: 'c' };
  expect(q5.arrayToObj(inputArray)).toEqual(expectation);
});

test('Empty array', () => {
  const inputArray = [];
  expect(q5.arrayToObj(inputArray)).toEqual(null);
});

test('Small array', () => {
  const inputArray = ['a'];
  expect(q5.arrayToObj(inputArray)).toEqual(null);
});

