/*
• Print out the balance of a savings account that compounds interest
  monthly. Prompt the user for the
• initial amount
• annual interest rate
• number of years to compound
*/

/* 
    inpuu  : initaialAmount, annualInterest, numberOfYear
    output : final Balance, and monthly balance
    process : divide annual to monthly rate
              multplay years by 12 to get monthes
              calculate interest for each month in a loop and add to current balance

*/

const prompt = require('prompt-sync')();
const initialAmount = +prompt('Enter initial amount : '); 
const anualInterestRate = prompt("Enter annual interest rate :")
const numberOfYears = prompt("Enter Number of years to Compound :")
let monthlyRate = anualInterestRate / 12;
monthlyRate = monthlyRate/100;
const months = numberOfYears * 12;

let balance = initialAmount;
for(let i = 1; i < months; i++){
  balance = balance + (monthlyRate * balance);

}

console.log(`Your Balace will be :  ${balance}`);

