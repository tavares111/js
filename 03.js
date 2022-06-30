/* Write a JavaScript function that reverse a number*/
const reverseNumber = (num) => {
  if(isNaN(num)) {
    return num;
  }
  const numberArray = num.toString().split("").reverse()
  
  return Number(numberArray.join(""))
}

console.log(reverseNumber(123))