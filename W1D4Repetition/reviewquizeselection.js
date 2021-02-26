"use strict";
/*
const x = 5;
console.log(x);  //5
if(x==5){
let y = 2*x;     
console.log(y); // 10
console.log(x); // 5
}
console.log(x); //5
//console.log(y); // it is declared locally so no output it is not recognized
*/
/*
let x;
if(x) {
const y=5
};
console.log(y); //  y is not defined , it is not recognized globally
*/
/*
let x;
if(!x) {
const y=5
};
console.log(y);  //  y is not defined , it is not recognized globally
*/

/*
Write a JavaScript program to determine whether a given year is a leap year in the Gregorian
calendar.
Leap year definition: Every year that is exactly divisible by four is a leap year, except for years
that are exactly divisible by 100, but these centurial years are leap years if they are exactly
divisible by 400.
*/
/*
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));  //true
console.log(leapyear(2000));  //true
console.log(leapyear(1700));  //false
console.log(leapyear(1800));  //false
console.log(leapyear(100));   //false
*/
// if not div by 
const prompt = require('prompt-sync')();
const leapyear = prompt('Enter Year please : ');
let year ;
if(year % 100 === 0 && year % 4 === 0) {

   // if(year % 400 === 0 && year % 4 === 0){
   // if(year % 400 === 0 )

   console.log(`The Year you entered  ${year} : is a Leap Year`)
}
else ( year % 100 === 0 && year % 400 === 0)

    console.log(`The Year you entered  ${year} : is not a Leap Year`)

