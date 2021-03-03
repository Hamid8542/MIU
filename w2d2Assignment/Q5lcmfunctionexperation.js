// 5. Write a function expression to find LCM of any two numbers using the
//    greatestCommonDivisor function from previous question. Assign it to the variable
//    leastCommonMultiple. LCM of two numbers is the smallest number that can be
//    divided evenly by both numbers. Write it as a function expression.


const prompt = require("prompt-sync")();
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

 let gcd = function(){
 for(let i = 1; i <= number1 && i <= number2; ++i) {
   // Checks if i is factor of both integers
   if(number1 % i === 0 && number2 % i === 0)
     gcd = i;
  }
      return gcd;
 }

  let lcm = (number1 * number2) / gcd();
 console.log(`The LCM of ${number1} and ${number2} is ${lcm} `);
    
 // let number1 = 72, number2 = 120,
 // lcm = 360