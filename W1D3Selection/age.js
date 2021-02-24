/*
3. Write a program that accepts user age as input and output following based on the input
If age <= 0
   print "please enter valid age"
if age is between 0 and 14
   print "You can't drive yet."
if age is between 15 and 18
   print "You can drive under supervision."
if age is 19 or higher
   print "You can drive."
*/

const prompt = require('prompt-sync')();
const age = +prompt("What is your age :");
if(age <= 0){
   console.log("Please enter a valid age : ");
}
else if(age <= 14){
console.log(" You can't drive yet : ");
}
else if(age <= 18 ){
console.log(" You can drive under supervison : ");
}
else if(age >= 19 ){
   console.log(" You can drive :");
}
