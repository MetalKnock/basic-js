const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 0;
  max = 0;

  calculateDepth(arr) {
    if (this.depth === 0) this.max = 0;

    this.depth++;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i]);
      }
    }

    if (this.max < this.depth) this.max = this.depth;

    this.depth--;

    return this.depth === 0 ? this.max : "";
  }
}

module.exports = {
  DepthCalculator,
};
