
const prompt = require ("prompt-sync")();
let name = prompt("What is your name?: ")
console.log(`Hi ${name}`)

let tempInCelsius = prompt('Eneter value in celsius: ')
let tempInFahrenheit = 9/5*parseFloat(tempInCelsius) + 32;
console.log(tempInFahrenheit);




// Write a program that computes volume of a cylinder based on user
//inputs for radius and height of a cylinder, using formula v = πr2h



// Write a program that takes x and y co-ordinates of two points as
//inputs and computes distance between these two points based on
//the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
