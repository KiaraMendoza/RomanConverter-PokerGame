const { romanEquivalents } = require('./equivalents');
/**
 * Function that converts arabic to roman
 * It receives a number, verifies if its valid (not too high, negative or not a number)
 * If it's valid, succesfully converts and returns an string with the result, 
 * otherwise it will return a message that it is not a valid number.
 * @param {number} decimal
 * @returns {string}
 */
exports.arabicToRoman = (decimal) => {
    
    // Verify if the given variable is a valid number to convert.
    if (isNaN(decimal) || !Number.isInteger(decimal) || decimal > 3999 || decimal < 1) {
        const response = `${decimal} is NOT a valid number.`;
        return response;
    }

    let romanStr = ''; // A variable that will hold the conversion result
    let aux = decimal; // An aux variable that helps on the conversion.

    // The heart of the function, using the aux variable we verify if we can continue converting
    // (if the aux value is more than 0)
    for (let i = 0; i < romanEquivalents.length; i++) {
        while (aux >= romanEquivalents[i].decimal) { // Get the biggest decimal we can that is bigger than the number we have (ex: 100 we get { decimal: 100, roman: 'C' })
            romanStr += romanEquivalents[i].roman; // Using the same index (i), we get the roman equivalent. (following the example: 'C')
            aux -= romanEquivalents[i].decimal; // Substract the used decimal. (following the example: 100)
        }

        if (aux === 0) break;
    }
    const response = `${decimal} is ${romanStr}`;
    return response;
}