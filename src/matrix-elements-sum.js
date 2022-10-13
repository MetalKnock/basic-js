const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrixDeg90 = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrixDeg90.length < matrix[i].length) matrixDeg90.push([]);

      matrixDeg90[j][i] = matrix[i][j];
    }
  }
  let sum = 0;
  for (let i = 0; i < matrixDeg90.length; i++) {
    for (let j = 0; j < matrixDeg90[i].length; j++) {
      if (matrixDeg90[i][j] === 0) break;
      sum += matrixDeg90[i][j];
    }
  }
  return sum;
}
getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]);
module.exports = {
  getMatrixElementsSum,
};
