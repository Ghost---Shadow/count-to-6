function mapReduce(inputArray) {
  const filteredNull = inputArray.filter(elem => elem);
  const filteredInput = filteredNull.filter(elem => elem.length > 0);
  const firstCharacters = filteredInput.map(element => element[0]);
  const joinedToString = firstCharacters.reduce((acc, elem) => acc + elem, '');
  return joinedToString;
}

module.exports.mapReduce = mapReduce;

const inputs = process.argv.slice(2);

console.log(`[${inputs}] becomes "${mapReduce(inputs)}"`);
