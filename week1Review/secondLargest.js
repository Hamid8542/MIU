// Write a defining table and JavaScript function named secondSmallest that accepts three
// integer numbers as parameters and return the second-smallest value among them.
// For e.g. secondSmallest(-1,9,7) → 7

// Defining Table 
// input : 3 numbers
// output : second largest number
// process : 

//const promp = require("prompt-sync")();
//let a = prompt(" Enter the 1st number :");
//let b = prompt(" Enter the 2nd number :");
//let c = prompt(" Enter the 3rd number :");

function secondSmallest(a, b, c) {

    if (b < a && a < c || c < a && a < b) {
        return a;
    }
    if (a < b && b < c || c < b && b < a) {
        return b;
    }
    return c;
}
console.log(secondSmallest(-1, 9, 7));