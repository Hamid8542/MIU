/*
1. Write a program that helps a user choose the correct footwear for the day’s weather based on
the table shown below. If the user enters any other weather type, your program should output
“sneakers”
Weather           Footwear
hot               sandals
rain              galoshes
snow              boots

*/

const prompt = require('prompt-sync')();
let weather = prompt("What is the weather today :");

if(weather === "hot") {
    console.log("You should wear sandales");
}
else if(weather === "rain"){
    console.log("You should wear galoshes");
}
else if(weather === "snow"){
    console.log("You should wear boots");
}
else {
console.log("You should wear sneakers ");
}
