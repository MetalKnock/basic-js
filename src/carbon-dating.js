const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    arguments.length === 0 ||
    typeof sampleActivity !== "string" ||
    isNaN(Number(sampleActivity)) ||
    Number(sampleActivity) === 0
  )
    return false;

  const numberSampleActivity = Number(sampleActivity);
  const k = 0.693 / 5730;
  const time = Math.ceil(Math.log(15 / numberSampleActivity) / k);

  if (time > 0) return time;
  return false;
}

dateSample("3.142");
module.exports = {
  dateSample,
};
