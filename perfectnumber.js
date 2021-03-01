// 3. Write a defining table and JavaScript program to check whether a number is Perfect number or not?
// Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
// For example: 6 is the first perfect number
// Proper divisors of 6 are 1, 2, 3
// Sum of its proper divisors = 1 + 2 + 3 = 6.
// Hence 6 is a perfect number

// Defining Table  
// input : a number 
// output : true or false
// process : 
//     > inital a sum to 1 always a divisor
//     > loop from 2 t the number - 1
//     > in the loop check if the index is a factor is number % index === 0
//     > if so add to sum
//     > Finally check to see if sum === number , then the number is perfect
// perfect numner = 6, 28 ,496, 8128
const prompt = require('prompt-sync')();
let number = +prompt('Please Enter  Digit of a Number : ');

let sum = 1;
for(let i = 2; i < number; i++) {
    if(number % i === 0){
        sum = sum + i;
    }
}
    if(sum === number){

        console.log("Perfect ! ");
    }
    else{
        console.log("sorry, not perfect :-( ");
    }
