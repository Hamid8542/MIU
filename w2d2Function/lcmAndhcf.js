// 5a. Now write a program that asks two numbers from the user and displays HCF and LCM of the 
//     two numbers.
// Hint: search for relation between HCF and LCM

const prompt = require("prompt-sync")();
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

 let lcm;
 let hcf;
 let temp , a , b ;

 a = number1;
 b = number2;
 while(b != 0)
 {
     temp = b;
     b = a % b;
     a = temp;
 }
 
 hcf = a;
 lcm = (number1 * number2)/hcf;
 
 console.log(`HCF and LCM of ${number1} and ${number2} are  ${hcf} and ${lcm} `);
 