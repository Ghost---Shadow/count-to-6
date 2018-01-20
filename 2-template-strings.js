/**
 * Takes an username and returns a greeting as String
 * @param {String} username
 * @return {String}
 */
function greetUser(username) {
    let greeting = `Hello, ${username}!\nYour name lowercased is "${username.toLowerCase()}".`;
    return greeting;
}

module.exports.greetUser = greetUser;
const username = process.argv[2];
console.log(greetUser(username));
