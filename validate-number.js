const {parsePhoneNumberFromString} = require('libphonenumber-js');

module.exports = function (input) {
    const phoneNumber = parsePhoneNumberFromString(input, 'US');
    if (phoneNumber && phoneNumber.isValid) {
      return phoneNumber.number;
    }
    throw new Error('Cannot parse: ' + input);
}
