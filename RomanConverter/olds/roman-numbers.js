const { romanToArabic } = require('../helpers/romanToArabic');
const { arabicToRoman } = require('../helpers/arabicToRoman');
const { romanEquivalentsOnArabic } = require('./equivalents');

/**
 * Function that converts roman numbers to an arabic number
 * at first it verifies if the given string is a valid roman number
 * using a regex expression, if thats true, it succesfully resolves the conversion
 * and returns an string.
 *
 * @param {string} romanStr
 * @returns {string}
*/

exports.romanNumbers = (toConvertArr) => {

    // The function for converting, we will pass it a 'numToConvert', the second argument is just for a later-internal use.
    function numberConverter(numToConvert, result = '') {
        if (typeof numToConvert === 'string') {
            return romanToArabic(numToConvert);
        } else if (typeof numToConvert === 'number' && numToConvert <= 3999) {  // Converting roman to arabic
            for (const roman in romanEquivalentsOnArabic) {
                if (numToConvert >= romanEquivalentsOnArabic[roman]) {
                    result += roman;
                    return numberConverter(numToConvert - romanEquivalentsOnArabic[roman], result);
                } else if (numToConvert === 0) {
                    return `${result}`;
                }
            }
        } else {
            return 'Not a valid number or it\'s too high';
        }
    }

    let resultStr = '';

    // Executing the numberConverter using the values read
    if (toConvertArr != null) {
        toConvertArr.map(numToConvert => {
            let toNumber = parseInt(numToConvert);
            if (toNumber) {
                // If the value is a valid number, we will pass it as a number
                let result = numberConverter(toNumber);
                console.log(toNumber, result);
                if (!result) {
                    result = 'Not a valid number or it\'s too high';
                }
                resultStr += result + '\n';
            } else {
                // If not, we will pass it as a string
                let result = numberConverter(numToConvert);
                console.log(numToConvert, result);
                if (!result) {
                    result = 'Not a valid number or it\'s too high';
                }
                resultStr += result + '\n';
            }
        })
    }

    return resultStr;
}