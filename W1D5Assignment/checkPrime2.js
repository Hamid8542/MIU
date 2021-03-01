//1. checkPrime
//    b. Now write a program that prompts user to input a number and calls the function
//       checkPrime to see if the entered number is a prime number or not.


 const prompt = require('prompt-sync')();
 let number = +prompt('Enter a number that you want to check weather it is a prime or not : ')
 function checkPrime(number){

    for (let i = 2; i < number; i++){
        if(number % i === 0){
            return " Not Prime ";
        }
    }
   return " Prime ";
}

console.log(checkPrime(number));
