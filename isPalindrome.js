/*
Return true if this word is a palindrome. false if it is not. A palindrome is 
a word that is spelled the same backwards and forwards.

For example:
isPalindrom("a")
// returns true
isPalindrom("noon")
// returns true
isPalindrom("hello")
// returns false

Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false
isPalindrom("racecar")
// returns true
*/

// Write your code below
const isPalindrome = string => {
  if (string.length % 2 === 0 || string.length === 1) {
    for (let i = 0; i < (string.length - 1) / 2; i++) {
      if (string[i] !== string[string.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isPalindrome("anina"));