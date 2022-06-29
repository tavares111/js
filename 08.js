/*Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)*/

function removeDuplicateFromArray(arr) {
    const uniqueArray = [];
    arr.forEach((item) => {
        const lowerCasedItem = item.toLowerCase()
        const hasItem = uniqueArray.some((value) => {
            return value.toLowerCase() === lowerCasedItem;
        })
        if(!hasItem) {
            uniqueArray.push(item.toLowerCase());
        }
    })
  return uniqueArray;
}

removeDuplicateFromArray(['a','b','c','A','B','C','a','b','c']);