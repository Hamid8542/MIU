// 4. Write a function expression and assign it to the variable greatestCommonDivisor, which will
//    compute GCD (Greatest Common Divisor) of two numbers. GCD is the largest number that divides
//     both. For example GCD of 20 and 28 is 4 and GCD of 98 and 56 is 14.

// program to find the HCF or GCD of two integers

// const prompt = require("prompt-sync")();
// let GCD;
// // take input
// const number1 = prompt('Enter a first positive integer: ');
// const number2 = prompt('Enter a second positive integer: ');

// // looping from 1 to number1 and number2
// for (let i = 1; i <= number1 && i <= number2; i++) {

//     // check if is factor of both integers
//     if( number1 % i === 0 && number2 % i === 0) {
//         GCD = i;
//     }
// }

// // display the hcf
// console.log(`GCD of ${number1} and ${number2} is ${GCD}.`);
   
// Enter a first integer: 20                // Enter a first integer: 98
// Enter a second integer: 28               // Enter a second integer: 56
// GCD of 20 and 28 is 4.                   // GCD of 98 and 56 is 14.


const prompt = require("prompt-sync")();
let GCD;
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

let isGCD = function(){
// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {
     let GCD;
    // check if is factor of both integers
    if( number1 % i === 0 && number2 % i === 0) {
        GCD = i;
    }
}
    return console.log(GCD);
}
//console.log(isGCD(`GCD of ${number1} and ${number2} is ,  ${GCD} `));
//console.log(isGCD());
isGCD();