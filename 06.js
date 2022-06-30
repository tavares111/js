/* Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result Sample numbers : 0, -1, 4 Output : 4, 0, -1 */
function sortThreeNumber(numberArray) {
    return numberArray.sort((a,b) => {
      return  b - a;
    })
  }
  
console.log(sortThreeNumber([0, -1, 4]));
