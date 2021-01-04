const { romanToArabic } = require('./helpers/romanToArabic');
const { arabicToRoman } = require('./helpers/arabicToRoman');

/**
 * Function that separates each variable of the passed array 
 * depending on their type, if its an string it will be converter to arabic/integer
 * otherwise, the variable will be converter to roman/string.
 * At the ends it returns result string that will be also printed on console.
 *
 * @param {Array} toConvertArr
 * @returns {string}
*/

exports.numberConverter = (toConvertArr) => {
    let result = '';
    toConvertArr.forEach(
        item => {
            console.log(item)
            if (!isNaN(Number(item))) {
                result += arabicToRoman(item) + '\n'
            } else {
                result += romanToArabic(item) + '\n'
            }
        }
    )
    console.log(result);
    return result;
}