const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      const top = i !== 0;
      const bottom = i !== matrix.length - 1;
      const left = j !== 0;
      const right = j !== matrix[i].length - 1;
      const topLeft = top && left;
      const topRight = top && right;
      const bottomLeft = bottom && left;
      const bottomRight = bottom && right;
      result[i][j] = 0;

      if (top) {
        if (matrix[i - 1][j]) {
          result[i][j]++;
        }
      }
      if (bottom) {
        if (matrix[i + 1][j]) {
          result[i][j]++;
        }
      }
      if (left) {
        if (matrix[i][j - 1]) {
          result[i][j]++;
        }
      }
      if (right) {
        if (matrix[i][j + 1]) {
          result[i][j]++;
        }
      }
      if (topLeft) {
        if (matrix[i - 1][j - 1]) {
          result[i][j]++;
        }
      }
      if (topRight) {
        if (matrix[i - 1][j + 1]) {
          result[i][j]++;
        }
      }
      if (bottomLeft) {
        if (matrix[i + 1][j - 1]) {
          result[i][j]++;
        }
      }
      if (bottomRight) {
        if (matrix[i + 1][j + 1]) {
          result[i][j]++;
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
