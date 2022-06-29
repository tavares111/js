/*Write a JavaScript function to merge two arrays and removes all duplicates elements*/

function mergeArray(arr1, arr2) {
    const uniqueList = {};
    arr1.forEach((item) => {
        uniqueList[item] = true;
    });
    arr2.forEach((item) => {
        uniqueList[item] = true;
    });

    return Object.keys(uniqueList);
}

mergeArray(
    ["a", "b", "c", "A", "B", "C", 1, 2, 3],
    ["a", "b", "c", "A", "B", "C", "d", "e", "f"]
);
