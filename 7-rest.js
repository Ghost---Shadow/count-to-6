function average(...args) {
  if (args.length === 0) {
    return null;
  }
  let result = 0;
  args.forEach((value) => {
    result += value;
  });

  return result / args.length;
}

module.exports = average;
