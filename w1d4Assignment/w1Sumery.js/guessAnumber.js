//                 Practice programming exercises

// Write a defining table and JavaScript program that asks user to guess a number between 1 and
// 10 until the user enters 5. Program also keeps track of number of attempts user made before
// guessing the correct number that is 5. Program should output following results based on the
// attempts made:
//    1. If user guessed 5 in first attempt, program should print "Awesome!"
//    2. If user guessed 5 in second attempt, program should print "Great!"
//    3. If user guessed 5 in third attempt, program should print "Not bad!"
//    4. Otherwise, program should print "It took you n attempts!", where n is the number of
//       attempts user made before guessing the correct answer.

const prompt = require('prompt-sync')();
let luckNumber = +prompt('Enter A Number Between 1 AND 10 : ');
let attemps = 0;
const yourLuckNumber = 5;
let n  ;

const prompt = require("prompt-sync")();

let number = +prompt(" Please enter any number between 1 and 10  :");

let result ;

switch (number) {
  case 1:
    console.log(` The Number  you entered ${number}  "spelled as : One `);
  // result = One
    break;
  case 2:
    console.log(`The Number you entered  ${number}  "spelled as : Two `);
  //  result = " Two ";
    break;
  case 3:
    console.log(`The  Number you entered ${number}  "spelled as : Three `);
  // result = "Three";
    break;
   case 4:
    console.log(`The Number you entered ${number}  "spelled as : Four `);
   //result = "Four";
   break;
    case 5:
    console.log(`The  Number you entered ${number}  "spelled as : Five `);
  // result = "Five"; 
   break;

}