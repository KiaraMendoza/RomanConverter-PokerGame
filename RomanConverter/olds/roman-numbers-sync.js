'use strict';
const fs = require('fs');
const { romanNumbers } = require('./roman-numbers');

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

let resultStr = romanNumbers(toConvertArr);

// Finally, we will write the result's array on another file
fs.writeFileSync('roman-numbers-result.txt', 'SYNC: \n' + resultStr);