// What will be the output of running following code?
// Write a function named isSumFirstLastOdd, that takes an integer number as an argument and 
// sums first and last digits of the number and returns true if the sum is odd, otherwise returns 
// false. Do not use string operations to access the digits.  Work with the numbers as numbers.  
// Access digits using number operations like %. 

// isSumFirstLastOdd(12363) à false, because sum of 1 and 3 is 4 which is even
// isSumFirstLastOdd(12764) à true, because sum of 1 and 4 is 5 which is odd

function isSumFirstLastOdd(number){
let smallest = null;
let greatest = null;
let quetient = null;
while(number > 0) {
   if(smallest === null){
      smallest = number % 10;
      
   } else{
      number = number % 10;
      last = number ;
      quetient = Math.floor(number / 10);
   }
   if(quetient === 0){
       greatest = last;
       const sum = smallest + greatest ;
       const result = sum ;
   }
  }
}
console.log(isSumFirstLastOdd(12363));