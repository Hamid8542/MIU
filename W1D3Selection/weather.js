//1. Write a program that asks user to enter weather for today and print
//"Get an umbrella" if weather is rainy.


const prompt = require('prompt-sync')();

let weather = prompt("What is the weather today :");

if(weather === "rainy" || weather === "Rainy") {
    console.log("Get an umbrella");
}