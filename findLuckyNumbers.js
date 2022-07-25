/*
Instructions:
Given a number, n, return an array containing n unique random numbers between 
1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.

For example:
luckyNumbers(2)
// returns (3, 7)

luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)
*/

// Write your code below this line.
const findLuckyNumbers = (n) => {
  const min = 1;
  const max = 10;  
  let luckyNumbers = [];

  const getLuckyNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  for (let i = 0; i < n; i++) {
    let newLuckyNumber = getLuckyNumber(min, max);
    
    while (luckyNumbers.includes(newLuckyNumber)) {
      newLuckyNumber = getLuckyNumber(min, max);
    }
    luckyNumbers.push(newLuckyNumber);
  }
  
  return luckyNumbers;
}

console.log(findLuckyNumbers(9));