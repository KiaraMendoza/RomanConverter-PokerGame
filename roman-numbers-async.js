'use strict';
const fs = require('fs');
const { romanNumbers } = require('./roman-numbers');

// We read the values from another file
let toConvertArr;
fs.readFile('to-convert.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error', err.code)
    } else {
        // We save the data on an array separating the lines into pieces to later pass the values to the function
        if (data.match(/(\r\n)/g)) {
            toConvertArr = data.split('\r\n'); // Windows
        } else {
            toConvertArr = data.split('\n'); // Mac or Linux
        }
        console.log(toConvertArr);
    }
})


// Finally, we will write the result's array on another file
setTimeout(() => {
    let resultStr = romanNumbers(toConvertArr);
    console.log(resultStr);

    fs.writeFile('roman-numbers-result.txt', 'ASYNC: \n' + resultStr, (err, data) => {
        if (err) {
            console.error('Error', err.code)
        } else {
            console.log('Writed in file');
            return;
        }
    });
}, 2000);