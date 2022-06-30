// In the above program, before printing inserted arrays,
// check if it has duplicate entries, insert them in separate array and print unique item of arrays

function flattenArray(arrOfArr) {
    const uniqueList = {}
    const duplicatesArray = []
    arrOfArr.forEach((innerArray) => {
        innerArray.forEach((item) => {
            if(uniqueList[item] !== undefined) {
                duplicatesArray.push(item);
            } else {
                uniqueList[item] = item;
            }
        });
    });
  	console.log('Duplicated', duplicatesArray);
    console.log('Unique', Object.values(uniqueList));
}

flattenArray([[1,2,3],[1,2,3],[1,2,3],[4,5,6],[7,8,9]])