const { romanRegexValidator } = require('./RomanValidator');
const { romanEquivalents } = require('./equivalents');

/**
 * Function that converts roman numbers to an arabic number
 * at first it verifies if the given string is a valid roman number
 * using a regex expression, if thats true, it succesfully resolves the conversion
 * and returns an string.
 *
 * @param {string} romanStr
 * @returns {string}
 */
exports.romanToArabic = (numToConvert) => {
    let response;

    // First test the given roman number using a regex expression.
    if (!romanRegexValidator.test(numToConvert)) {
        response = `${numToConvert} is not a Roman number.`;
        return response;
    }

    // Converts the given string into an array like 'XV' = ['X', 'V']
    const romanArray = Array.from(numToConvert);

    // Using the above array, we will search for the letter on the 'romanEquivalents' array of objects using the 'roman' key.
    // Once found, we will pass the value of that roman number using the 'decimal' key. 
    // Ex: Given the 'X' string, we will get '{ decimal: 10, roman: 'X' }' so at the end, we will get 10
    const intArray = romanArray.map(letter => parseInt(romanEquivalents.filter(val => val.roman === letter).map(val => val.decimal)));

    const result = intArray.reduce((decimal, current, index, array) => {
        if (index === 0) {
            decimal = current;
        } else {
            decimal = current <= array[index - 1] ? decimal + current : decimal - array[index - 1] * 2 + current;
        }

        return decimal;
    })

    response = `${numToConvert} is ${result}`;
    return response;
}