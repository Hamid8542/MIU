/*
Write a loop that keeps on prompting for age until you enter age
older than 18
• Write both while and do while versions.
*/
/*
// using while loop
const prompt = require('prompt-sync')();
let age = prompt('Enter your Age please  : ');
 
while(age <= 18 ){
    console.log(" please try again , You are below 18 ")
    age = prompt('Enter your Age please  : ');
  
}
    console.log(" you are over 18 ")
*/

//using do loop
const prompt = require('prompt-sync')();
let age = prompt('Enter your Age please  : ');
 
while(age <= 18 ){
    console.log(" please try again , You are below 18 ")
    age = prompt('Enter your Age please  : ');
  
}
    console.log(" you are over 18 ")
