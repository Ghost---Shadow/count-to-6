const q2 = require('./2-template-strings');

test('Check for equality', () => {
    const username = 'Domenic';
    const expectedString = `Hello, Domenic!\nYour name lowercased is "domenic".`;
    expect(q2.greetUser(username)).toBe(expectedString);
});

