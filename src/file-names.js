const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    if (i === 0) result.push(names[i]);

    for (let j = i - 1; j >= 0; j--) {
      if (names[i] === result[j]) {
        result.push(`${names[i]}(1)`);
        break;
      }
      if (names[i] === result[j].slice(0, -3)) {
        let current = Number(result[j].slice(-2, -1)) + 1;
        result.push(`${names[i]}(${current})`);
        break;
      }
    }

    if (result.length - 1 < i) {
      result.push(names[i]);
    }
  }
  return result;
}

module.exports = {
  renameFiles,
};
