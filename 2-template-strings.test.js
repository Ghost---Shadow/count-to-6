const q2 = require('./2-template-strings');

test('Check for equality', () => {
    const username = 'Domenic';
    const expectedString = `Hello, Domenic!\nYour name lowercased is "domenic".`;
    expect(q2.greetUser(username)).toBe(expectedString);
});

test('Check for nullity', () => {
    const username = null;
    const expectedString = `Error: Username cannot be null or undefined.`;
    expect(q2.greetUser(username)).toBe(expectedString);
});

test('Check for undefined', () => {
    const username = undefined;
    const expectedString = `Error: Username cannot be null or undefined.`;
    expect(q2.greetUser(username)).toBe(expectedString);
});

test('Check for numeric handling', () => {
    const username = 1234;
    const expectedString = `Hello, 1234!\nYour name lowercased is "1234".`;
    expect(q2.greetUser(username)).toBe(expectedString);
});
