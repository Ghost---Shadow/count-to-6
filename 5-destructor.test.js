const q5 = require('./5-destructor');

test('Objects must be equal', () => {
  const inputArray = ['a', 'b', 'c', 'd', 'e'];
  const expectation = { username: 'b', email: 'c' };
  expect(q5.arrayToObj(inputArray)).toEqual(expectation);
});
