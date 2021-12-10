/*
Instructions:
Given the starting code of:

x = 1
y = 2

Write a block of code that will print out the largest value.

Using the given values as an example, your code should print out 2.

To verify your code is working properly, try and change the values 
of x and y.

As an additional challenge, print out 'The values are identical.'
If x and y have the same value.
*/

let x = 2
let y = 500

// Write your code below this line.

if (x > y) {
  console.log(x);
} else if (x < y) {
  console.log(y);
} else {
  console.log('The values are identical.');
}
