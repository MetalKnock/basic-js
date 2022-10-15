const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const reverse = domains.map((val) => {
    return val.split(".").reverse();
  });

  const resultDns = {};
  for (let i = 0; i < reverse.length; i++) {
    let current = "";
    for (let j = 0; j < reverse[i].length; j++) {
      current += `.${reverse[i][j]}`;

      resultDns.hasOwnProperty(current)
        ? resultDns[current]++
        : (resultDns[current] = 1);
    }
  }

  return resultDns;
}
getDNSStats(["epam.com", "info.epam.com"]);
module.exports = {
  getDNSStats,
};
