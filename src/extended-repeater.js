const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.hasOwnProperty("repeatTimes")) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }
  if (!options.hasOwnProperty("addition")) {
    options.addition = "";
  }
  if (!options.hasOwnProperty("additionRepeatTimes")) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }

  const additionsArr = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionsArr.push(String(options.addition));
  }
  const additionsAndSeparator = additionsArr.join(options.additionSeparator);
  const stringsArr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    stringsArr.push(String(str));
  }
  let result = stringsArr.join(`${additionsAndSeparator}${options.separator}`);
  result += `${additionsAndSeparator}`;
  return result;
}

module.exports = {
  repeater,
};
