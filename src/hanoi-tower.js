const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  let turnsN = Math.pow(2, diskNumber) - 1;
let secondsN = (turnsN * 3600) / turnsSpeed;
secondsN = Math.floor(secondsN);

return { turns: turnsN, seconds: secondsN };
};
