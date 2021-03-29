const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
//   let array = arr.slice();

//  for (let i = 0; i < array.length; i++) {
//    if (array[i] == '--discard-next') {
//     array.splice((i), 2)
//    }
//    if (array[i] == '--discard-prev') {
//     array.splice((i - 1), 2)
//    }
//    if (array[i] == '--double-next') {
//     array[i] = array[i + 1]
//    }
//    if (array[i] == '--double-prev') {
//     array[i] = array[i - 1]
//    }
//   }
//  return array;
// };

try {
  if(Object.prototype.toString.call(arr) !== "[object Array]"){
    throw new Error()
  }
  const test = [...arr];
  const res = test.reduce((acc, elem, index, array) => {
    switch (elem) {
        case "--discard-next":
          if (index !== acc.length-1){ acc[index+1] = 'q`'};
          acc[index] = 'q`';
          break;
          case "--discard-prev":
            if (index !== 0){ acc[index-1] = 'q`'};
            acc[index] = 'q`';
          break;
          case "--double-next":
            if (index !== acc.length-1){ acc[index] = acc[index+1]}
          else{acc[index]='q`'}
          break;
          case "--double-prev":
            if (index !== 0){ acc[index] = acc[index-1]}
            else{acc[index]='q`'}
          break;
          default:
            break;
      }
      return acc;
  },test).filter(el=>el!=='q`')
  return res
} 
catch (error) {
  throw error
}
}
