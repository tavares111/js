/* Create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1 */
const switchEdgeLetters = (word) => {
    if(!word || !word.length) {
      return word;
    }
    const wordArray = word.split("");
    const init = wordArray.shift();
    const end = wordArray.pop();
    wordArray.unshift(end);
    wordArray.push(init);
    return wordArray.join("")
  }
  
  console.log(switchEdgeLetters('1234'))