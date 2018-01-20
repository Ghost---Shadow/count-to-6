function arrayToObj(inputArray) {
  if (inputArray.length < 3) {
    return null;
  }
  const result = {};
  [, result.username, result.email] = inputArray;
  return result;
}

module.exports.arrayToObj = arrayToObj;

// [1, "jdoe", "jdoe@example.com", "John", "Doe"]
const userArray = process.argv.slice(2);

// {username: "jdoe", email: "john@doe.com"}
console.log(arrayToObj(userArray));
