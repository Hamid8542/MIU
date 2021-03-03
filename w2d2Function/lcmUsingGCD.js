
const prompt = require("prompt-sync")();
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

 let lcm;
 let gcd = 1;

 for(let i = 1; i <= number1 && i <= number2; ++i) {
   if(number1 % i === 0 && number2 % i === 0)
     gcd = i;
 }

  lcm = (number1 * number2) / gcd;
 console.log(`The LCM of ${number1} and ${number2} is ${lcm} `);

 //let number1 = 72, number2 = 120,
//lcm = 360