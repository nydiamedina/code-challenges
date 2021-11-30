// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
const addToZero = array => {
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let num2 = array[j];
      if (num1 + num2 === 0 && i != j) {
        return 'True';
      }
    }
  }
  return 'False';
}

console.log(addToZero(array))
