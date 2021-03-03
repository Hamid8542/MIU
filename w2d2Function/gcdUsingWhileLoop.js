// 4. Write a function expression and assign it to the variable greatestCommonDivisor, which will
//    compute GCD (Greatest Common Divisor) of two numbers. GCD is the largest number that divides
//     both. For example GCD of 20 and 28 is 4 and GCD of 98 and 56 is 14.

// program to find the GCD of two integers
const prompt = require("prompt-sync")();
// take input
let number1 = prompt('Enter a first positive integer: ');
let number2 = prompt('Enter a second positive integer: ');

// looping until both numbers are equal
while(number1 !== number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

// display the GCD
console.log(`GCD is ${number1}`);

// Enter a first integer: 20                // Enter a first integer: 98
// Enter a second integer: 28               // Enter a second integer: 56
// GCD of 20 and 28 is 4.                   // GCD of 98 and 56 is 14.