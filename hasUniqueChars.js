/*
Instructions:
Given a word, return true if that word contains only unique characters. 
Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true
*/

// Write your code below
const hasUniqueChars = word => {
  let characters = word.split('');
  let uniqueCharacters = [...new Set(characters)];

  return word.length === uniqueCharacters.length ? true : false;
}

console.log(hasUniqueChars('Nydiaaaa'));