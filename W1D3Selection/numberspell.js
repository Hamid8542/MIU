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


