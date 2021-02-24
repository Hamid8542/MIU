/*
    Write a program that asks user to enter number between 1 to 5 and
    prints out how the number is spelled.
    • First, write using else if
    • Then, refactor it to use switch
*/

const prompt = require("prompt-sync")();

let number = +prompt(" Please enter any number between 1 and 5 and I will show you how it spelled :");

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