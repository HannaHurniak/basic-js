const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(numActivity) {

if (typeof numActivity != 'string' || numActivity == null) return false;

numActivity = Number(numActivity);
if (numActivity <= 0 || numActivity >= 15) return false;
if (typeof numActivity != 'number' || isNaN(numActivity)) return false;
let k = 0.693 / HALF_LIFE_PERIOD;
let t = (Math.log(MODERN_ACTIVITY / numActivity)) / k;
// if (t <= 0) return false;
return Math.ceil(t);
};
