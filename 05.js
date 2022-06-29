
/*Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string*/

function countLetters(word, letter) {
    return word.split("").reduce((acc, curr) => {
      if(curr === letter)  {
        return acc +1
      } return acc
    }, 0)
  }
  
  countLetters('casa', 'a')