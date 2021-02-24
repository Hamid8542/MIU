/*1. Write a JavaScript program that ask a user for a volume in quarts then converts that value in
liters. */

const prompt = require ("prompt-sync")();
let volInQuartz = prompt("please enter the the volume in quartiz?: ")
const volInLiters = volInQuartz * 0.946352946;    
console.log(`The volume in liter is : ${volInLiters}`);

/*2. Write a JavaScript program that asks a user for a distance in kilometers and then convert that
value in miles.*/

const prompt = require ("prompt-sync")();
let distInKilometers = prompt("please enter the the distance in kilometer?: ")
const distInMiles =  distInKilometers / 1.609;    
console.log(`The distance in Mile is : ${distInMiles}`);

/*3. An employee at a grocery store must frequently place boxes of cans in stacks. Write a program
that allows him to enter the total number of boxes and the number of boxes he will place in
each stack. Your program must output the number of stacks he will have to make. All the stacks
except the last one must have the exact number of boxes that the employee specifies. The last
stack must have the exact number or fewer boxes. For example, if the employee enters 74 total
boxes and 6 boxes in each stack your program must output 13.
*/



/*4. Write JavaScript program to compute the mileage of a vehicle. Your program should allow the
user to enter the beginning and ending odometer readings and the number of gallons of gas
used and should output the mileage in miles per gallon.*/

const prompt = require ("prompt-sync")();
let initialMileage = prompt("please enter the the initial Reading of the odometer ?: ")
let endlMileage = prompt("please enter the the ending reading of odometer ?: ")
let galloneUsed = prompt("please enter the the the tiotal gallons used ?: ")
let totalMilage = endlMileage - initialMileage;
let milePerGallon =  totalMilage / galloneUsed ;
console.log(`The milage in miles per gallons are : ${totalMilage}`);   

   

/*5. When you exercise to strengthen your heart, you should maintain your heart rate within a
range. To find that range, subtract your age from 220. This difference is your maximum heart
rate per minute. Your heart simply will not beat faster than this maximum (220 − age). When
exercising to strengthen your heart, you should keep your heart rate between 65% and 85% of
your heart’s maximum. Write a JavaScript program that asks for a person’s age and computes
and outputs the slowest and fastest rates necessary to strengthen his heart.*/

const prompt = require ("prompt-sync")();
let age = prompt("please enter your age ?: ");
let maxHearRatePerMinute = (220 - age);

const yourMinLimitHeartRate = (220 - age) * 0.65;
const yourMaxLimitHeartRate = (220 - age) * 0.85;
console.log(`The slowest rates of your heart rate should be is : ${yourMinLimitHeartRate} + The fastest rate of your heart rate should be : ${yourMaxLimitHeartRate}`) 


/*
Answer the following questions in a word document based on your reading assignment
1. What will be the output of running following code? 
*/
   console.log(Number(null));      // o
   console.log(Number(undefined)); // NAN
   console.log(Boolean("0"));      // true
   console.log(Boolean(" "))       // true
  
   /* What will be the out of this code ?
   */
  let a = b = 2;
  let c = 3 - (a + b + 1);
  console.log(a--); // 2
  console.log(++c); // -1
  console.log(a);   //  1
  console.log(c);   // -1

/* 
3. What is the significance of + operator before prompt function in following code?
let a = +prompt("First number?");
*/

/*Answer
The " + " implicitly convert data , usually when we prompt the user to enter any data weather a number or string 
the system understands ot take it as string, so '+' will help as to convert to a number,
we don't need to use parseInt 

//4. What is the use of !! and ?? operators in JavaScript? Explain with an example of each.
  
 !! >>>> A double NOT !! is used for converting a value to boolean type:

// ?? (Nullish Coalescing .----?? returns the first argument if it’s not null/undefined. 
  Otherwise, the second one.
  let say 
    x ?? y ;
  if x is defined, then x,
  if x isn’t defined, then y.
  in general The nullish coalescing operator ?? provides a short way to choose the 
  first “defined” value from a list.

  /*
5. Which of the following statements is true?

a. In computer programming, a statement can be part of an expression. False
   I think an experassion is part of a statement
b. In computer programming, an expression can be a part of a statement. True
    Ya experation is part of statement


Q4 of today's assignment (part 2)  What is the use of || and && operators (logical-or and logical-and) in JavaScript? 
   Explain with an example of each.

  || or && work on boolean values ( Any non zero value is true ) 
 to produce a boolean result.

 For example:
   2  ||  1  = true
   0  ||  0  = false

   2  &&  1  = true 
   2  &&  0  = false

   how it works ? we know that boolean && >>> 
    true || true > true
    false || true > true
    true || false > true
    false || false > false

    whereas && >>> 
    
    true && true > true
    false && true > false
    true && false > false
    false && false > false


