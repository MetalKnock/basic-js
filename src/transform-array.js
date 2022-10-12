const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
    const controlSequences = [
      "--discard-next",
      "--discard-prev",
      "--double-next",
      "--double-prev",
    ];
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        switch (arr[i]) {
          case controlSequences[0]:
            if (i !== arr.length - 1) i++;
            break;
          case controlSequences[1]:
            if (i !== 0 && arr[i - 2] !== controlSequences[0]) resultArr.pop();
            break;
          case controlSequences[2]:
            if (i !== arr.length - 1) resultArr.push(arr[i + 1]);
            break;
          case controlSequences[3]:
            if (i !== 0 && arr[i - 2] !== controlSequences[0])
              resultArr.push(arr[i - 1]);
            break;
          default:
            resultArr.push(arr[i]);
        }
      } else {
        resultArr.push(arr[i]);
      }
    }
    return resultArr;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  transform,
};
