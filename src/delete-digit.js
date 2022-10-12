const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let copyN = n;
  let numbersArray = [];
  let i = 0;

  while (copyN > 0) {
    numbersArray[i] = copyN % 10;
    copyN = Math.floor(copyN / 10);
    i++;
  }
  numbersArray.reverse();

  let max = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    let currentValue = Number(
      numbersArray
        .slice(0, i)
        .concat(numbersArray.slice(i + 1, numbersArray.length))
        .join("")
    );

    if (currentValue > max) {
      max = currentValue;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
