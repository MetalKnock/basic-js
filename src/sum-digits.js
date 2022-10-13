const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n;
  let sum = 0;

  while (sum === 0 || String(sum).length > 1) {
    while (number > 0) {
      bitDepthNumber = Number(String(number).length - 1);

      sum += Math.floor(number / 10 ** bitDepthNumber);
      number = Math.floor(number % 10 ** bitDepthNumber);
    }
    if (String(sum).length > 1) {
      number = sum;
      sum = 0;
    }
  }

  return sum;
}
// getSumOfDigits(100);
// getSumOfDigits(91);
// getSumOfDigits(100);
// console.log(getSumOfDigits(35));
// console.log(getSumOfDigits(99));
// console.log(getSumOfDigits(123));

module.exports = {
  getSumOfDigits,
};
