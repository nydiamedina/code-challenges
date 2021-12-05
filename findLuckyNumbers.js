// Write your code below this line.
const min = 1;
const max = 10;

const findLuckyNumbers = n => {
  let luckyNumbers = [];
  for (let i = 0; i < n; i++) {
    let newLuckyNumber = Math.floor(Math.random() * (max - min + 1) + min);    
    
    while (luckyNumbers.includes(newLuckyNumber)) {
      newLuckyNumber = Math.floor(Math.random() * (max - min + 1) + min);
    }
    luckyNumbers.push(newLuckyNumber);
  }
  return luckyNumbers;
}

console.log(findLuckyNumbers(9));