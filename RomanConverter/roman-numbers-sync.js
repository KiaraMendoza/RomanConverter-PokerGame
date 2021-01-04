'use strict';
const fs = require('fs');
const { numberConverter } = require('./numberConverter');

// We read the values from another file.
let data = fs.readFileSync('to-convert.json', 'utf-8'); 

// And parse the data to get a usable array.
let toConvertArr = JSON.parse(data);

// Then executes the converter and save the result on an string.
let resultStr = numberConverter(toConvertArr);

// Finally, we will write the result on another file.
fs.writeFileSync('roman-numbers-result.txt', 'SYNC: \n' + resultStr);