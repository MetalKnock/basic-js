const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrSorted = [...arr];
  const exceptionIndexes = [];

  arrSorted.forEach((val, i) => {
    if (val === -1) exceptionIndexes.push(i);
  });

  arrSorted.sort((a, b) => a - b).splice(0, exceptionIndexes.length);

  exceptionIndexes.forEach((val) => {
    arrSorted.splice(val, 0, -1);
  });

  return arrSorted;
}

module.exports = {
  sortByHeight,
};
