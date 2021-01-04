'use strict';
const fs = require('fs');
const { numberConverter } = require('./numberConverter');

// We read the values from another file
let toConvertArr;
fs.readFile('to-convert.json', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error', err.code);
    } else {
        toConvertArr = JSON.parse(data);
        return toConvertArr;
    }
})


// Finally, we will write the result's array on another file
setTimeout(() => {
    let resultStr = numberConverter(toConvertArr); // Executes the converter
    console.log(resultStr); // Print the result on console

    // Write the result on a file
    fs.writeFile('roman-numbers-result.txt', 'ASYNC: \n' + resultStr, (err, data) => {
        if (err) {
            console.error('Error', err.code)
        } else {
            console.log('Writed in file');
            return;
        }
    });
}, 2000);