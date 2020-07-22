'use strict';
const fs = require('fs');

// We read the values from another file
let data = fs.readFileSync('to-convert.txt', 'utf-8'); 
let toConvertArr;

// We save the data on an array separating the lines into pieces to later pass the values to the function
if (data.match(/(\r\n)/g)) {
    toConvertArr = data.split('\r\n'); // Windows
} else {
    toConvertArr = data.split('\n'); // Mac or Linux
}

console.log(toConvertArr);

// An object with the equivalents
const romanEquivalentsOnArabic = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
}

// The function for converting, we will pass it a 'numToConvert', the second argument is just for a later-internal use.
function numberConverter (numToConvert, result = '') {
    if (typeof numToConvert === 'string') {
        let arabicNumber = 0;
        // Check for repeating characters
        let strArr = numToConvert.split('').sort().join('').match(/(.)\1+/g);
        let isValid = true;
        if (strArr) {
            isValid = strArr.forEach((elem) => {
                if (elem.length >= 4) {
                    console.error(`${numToConvert} It's not a valid roman number`);

                    return false;
                }
            });
            if (!isValid) {
                return `${numToConvert} It's not a valid roman number`;
            }
        }
        // Converting arabic to roman
        numToConvert.split('').map(romanNum => {
            if (!Object.keys(romanEquivalentsOnArabic).includes(romanNum)) {
                console.error(`${numToConvert} It\'s not a valid roman number`);
                return `${numToConvert} It's not a valid roman number`;
            }

            for (const roman in romanEquivalentsOnArabic) {
                if (romanNum === roman) {
                    arabicNumber += romanEquivalentsOnArabic[roman];
                }
            }
        });

        console.log(arabicNumber);
        return arabicNumber;
    } else if (typeof numToConvert === 'number' && numToConvert <= 3999) {
        for (const roman in romanEquivalentsOnArabic) {
            if (numToConvert >= romanEquivalentsOnArabic[roman]) {
                result += roman;
                return numberConverter(numToConvert - romanEquivalentsOnArabic[roman], result);
            } else if (numToConvert === 0) {
                console.log(`${result}`)
                return `${result}`;
            }
        }
    } else {
        console.error(`${numToConvert} It\'s not a valid number or it\'s too high`);
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
            resultStr += result + '\n';
        } else {
            // If not, we will pass it as a string
            let result = numberConverter(numToConvert);
            resultStr += result + '\n';
        }
    })
}

console.log(resultStr);

// Finally, we will write the result's array on another file
fs.writeFileSync('roman-numbers-result.txt', 'SYNC: \n' + resultStr);