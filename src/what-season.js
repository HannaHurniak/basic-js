const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // if (date == null) return 'Unable to determine the time of year!';
  // if (!(date instanceof Date)) throw new Error;
  // if (!date) return Error;
  // console.log(date)
  // let month = date.getMonth();
  let timeOfTheYear = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  
  try {
    if (Object.prototype.toString.call(date) === "[object Date]"){
      return timeOfTheYear[date.getMonth()];
    } else {
      throw new Error('Unable to determine the time of year!')
    }
  }
  catch(error){
    if (typeof date == 'undefined'){
      return error.message
    }
    throw error
  }
};
