/* Write a JavaScript for loop that will iterate from 0 to 15. For each iteration,
 it will check if the current number is odd or even, and display a message to the screen Sample Output : "0 is even" "1 is odd" "2 is even" */
 function oddOrEven() {
    for(let i = 0; i <= 15; i++) {
      console.log(`${i} is ${i % 2 ? 'odd' : 'even'}`);
    }
  }
  
  oddOrEven();
  