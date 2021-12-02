const transpose = function (array) {

  let results = [];

  for (let i = 0; i < array[0].length; i++) {
    let row = [];
    for (let j = 0; j < array.length; j++) {
      row.push(array[j][i]);
    }
    results.push(row);
  }
  return results;
};


const wordSearch = (letters, word) => {

  if (letters.length < 1 || word.length < 1) return false;

  const horizontalJoin = letters.map(ls => ls.join(''))

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true
    }
  };

  const vertical = transpose(letters)
  const verticalJoin = vertical.map(ls => ls.join(''))
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch

