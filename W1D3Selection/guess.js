/* 
2. Write a program that asks user to enter a number between 1 to 10,
and print "Bingo!" if user enters 7 otherwise prints "Try again.".
• Use === for comparison not ==
*/

const prompt = require('prompt-sync')();
const youLackyNumber = +prompt("Please enter a number between 1 to 10 :");
//const guess = +prompt("Please enter a number between 1 to 10 :");
if (youLackyNumber === 7 ){
    console.log("Bingo");

}else{
    console.log("Try again")

}

