/* Write a JavaScript function to calculate the sum of values in an array */

function sumValuesOfArray(numberArray) {
    return numberArray.reduce((acc, curr) => {
        return acc + curr;
    }, 0)
}

sumValuesOfArray([1,2,3])
