exports.romanToInteger = (numToConvert) => {
    //sequence of roman letters
    let arr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    //value of the respective roman letters
    let values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = 0;

    //keep track of the previous index
    let prevIndex = 0;

    for (let i = numToConvert.length - 1; i >= 0; i--) {
        //if the current letter is having greater index than previous letter then add values
        if (arr.indexOf(numToConvert[i]) >= prevIndex) {
            sum = sum + values[numToConvert[i]];
        } else {
            //if the current letter is having lesser index than previous letter then sub values
            sum = sum - values[numToConvert[i]];
        }

        //store the index of the previous roman letters
        prevIndex = arr.indexOf(numToConvert[i]);
    }
    console.log(numToConvert, sum)
    return sum;
}