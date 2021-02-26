/*
Write a JavaScript program to compute sum of all the digits in a given integer number.
      Input   Output
       123      6
       102      3
       8        8
*/

 const prompt = require('prompt-sync')();
 let number = prompt('Please Enter  Digit of a Number : ');

sum = 0;
while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
console.log(sum);