module.exports = function makeImportant(text, num = text.length) {
  return text + '!'.repeat(num);
};

