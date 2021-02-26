/*
4. Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
   being positive integer from user input. 
   The Fibonacci series is a sequence such that each number is the sum of the two preceding ones,
   starting from 0 and 1. That is, fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

*/
/*
    input : Positive Number
    output: Fibonacci Series
    process : F1 = 1;
              Fn = Fn-1 + Fn-2;
*/

const prompt = require('prompt-sync')();
const positiveNumber = (prompt('Enter a positive number : '));
let n1 = 0, n2 = 1, fibonacciSeries;

fibonacciSeries = n1 + n2;

while (fibonacciSeries <= positiveNumber) {

    console.log(fibonacciSeries);

         n1 = n2;
         n2 = fibonacciSeries;
         fibonacciSeries = n1 + n2;
}