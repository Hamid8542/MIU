const prompt = require ("prompt-sync")();
let name = prompt("What is your name?: ")
console.log(`Hi ${name}`)

let tempInCelsius = prompt('Eneter value in celsius: ')
let tempInFahrenheit = 9/5*parseFloat(tempInCelsius)+32;
console.log(tempInFahrenheit);