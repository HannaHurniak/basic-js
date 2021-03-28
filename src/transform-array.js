const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  let array = arr.slice();

 for (let i = 0; i < array.length; i++) {
   if (array[i] == '--discard-next') {
    array.splice((i), 2)
   }
   if (array[i] == '--discard-prev') {
    array.splice((i - 1), 2)
   }
   if (array[i] == '--double-next') {
    array[i] = array[i + 1]
   }
   if (array[i] == '--double-prev') {
    array[i] = array[i - 1]
   }
  }
 return array;
};
