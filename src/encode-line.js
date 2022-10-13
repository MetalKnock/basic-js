const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let j = 1;
    while (str[i] === str[i + 1]) {
      i++;
      j++;
    }

    if (j > 1) {
      result.push(j, str[i]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

module.exports = {
  encodeLine,
};
