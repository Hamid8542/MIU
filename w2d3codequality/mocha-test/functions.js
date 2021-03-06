"use strict";

exports.checkPrime = checkPrime;
exports.areaOfCircle = areaOfCircle;


/**
 * 
 * @param {number} num is an integer
 * @returns {boolean} true if number is prime, else false
 * Prime numbers are numbers that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are 2, 3, 5, 7, and 11.
 */
function checkPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
        return num > 1;
}
   function areaOfCircle(radius){
       return Math.PI * Math.PI;
   }

// function foo() {

//     console.log("bar");
    
// }
