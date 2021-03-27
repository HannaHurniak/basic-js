const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(name) {
  // throw new CustomError('Not implemented');

if (Array.isArray(name) !== true) return false;

let arr = [];
for (let i =0; i < name.length; i++) {
  if(typeof (name[i]) == 'string'){
    arr.push(name[i]);
  }    
}
arr = arr.map(function (el) {
  return el.trim().toUpperCase();
});

arr = arr.sort().map(item => item[0]).join('');

return arr;
};
