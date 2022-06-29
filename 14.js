// Write a program that inserts multiple arrays (array1, array2, array3) into main array (mainArray), then loop mainArray and print each inserted array

function flattenArray(arrOfArr) {
    let mainArray = [];
    arrOfArr.forEach((innerArray) => {
        mainArray = mainArray.concat(innerArray);
    });
    return mainArray
}

flattenArray([[1,2,3],[4,5,6],[7,8,9]])