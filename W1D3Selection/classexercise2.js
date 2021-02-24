/*

1. Write a program that asks user to enter weather for today and print
"Get an umbrella" if weather is rainy.


const prompt = require('prompt-sync')();

let weather = prompt("What is the weather today :");

if(weather === "rainy" || weather === "Rainy") {
    console.log("Get an umbrella");
}

/* 
2. Write a program that asks user to enter a number between 1 to 10,
and print "Bingo!" if user enters 7 otherwise prints "Try again.".
• Use === for comparison not ==
*/
/*
//const prompt = require('prompt-sync')();
const youLackyNumber = +prompt("Please enter a number between 1 to 10 :");
//const guess = +prompt("Please enter a number between 1 to 10 :");
if (youLackyNumber === 7 ){
    console.log("Bingo");

}else{
    console.log("Try again")

}



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
/*
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
/*
    Write a program that asks user to enter number between 1 to 5 and
    prints out how the number is spelled.
    • First, write using else if
    • Then, refactor it to use switch
*/

const prompt = require("prompt-sync")();
let number = +prompt(" Please enter any number between 1 and 5 and I will show you how it spelled :");
if(number === 1){
    console.log(" Number " + number + "spelled as : One ")
}
if(number === 2){
    console.log(" Number " + number + "spelled as : Two ")
}
if(number === 3){
    console.log(" Number " + number + "spelled as : Three ")
}
if(number === 4){
    console.log(" Number " + number + "spelled as : Four ")
}
if(number === 5){
    console.log(" Number " + number + "spelled as : Five ")
}

