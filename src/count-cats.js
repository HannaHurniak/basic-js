const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  // throw new CustomError('Not implemented');
  let res = arr.reduce((acc, el, index, array) => {
    for (let i = 0; i < el.length; i++) {
     if(array[index][i] === '^^') acc++
    }
    return acc;
   }, 0);
  return res;

  if (res === 0) return 0;
};
