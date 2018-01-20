function demoSpread(inputArray) {
  if (inputArray.length === 0) {
    return '';
  }
  return `The minimum of [${inputArray}] is ${Math.min(...inputArray)}`;
}

module.exports.demoSpread = demoSpread;

const inputArray = process.argv.slice(2);

console.log(demoSpread(inputArray));
