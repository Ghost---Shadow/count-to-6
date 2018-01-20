function mapReduce(inputArray) {
  const firstCharacters = inputArray.map(element => element[0]);
  const joinedToString = firstCharacters.reduce((acc, elem) => acc + elem, '');
  return joinedToString;
}

module.exports.mapReduce = mapReduce;

const inputs = process.argv.slice(2);

console.log(mapReduce(inputs));
