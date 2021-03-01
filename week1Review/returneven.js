const prompt = require("prompt-sync")();
let number = +prompt(" Enter a number : ")

let even;
let odd;

function isEven(number){

    if( number % 2 === 0){
 
       return "even"
    }
    else 
       return " odd "
}
console.log(isEven(number))