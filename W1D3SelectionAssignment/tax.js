// Write a JavaScript program that asks user to input gross salary and shows the federal tax he/she
// need to pay for the year. Federal tax brackets are as follows
// a. Salary up to 20K, don't have to pay any federal tax
// b. Salary above 20K and up to 50K, 5% of the salary
// c. Salary above 50K needs to pay 10% of the salary

//   Defining Table

//   salary                              // Fedrteral Tax
//  $0 to less than 20K                        no pay 
//  $20K to less than 50K                   5% of salary
//  $50K and above                          10% of salary

const prompt = require("prompt-sync")();
let salary = prompt(" Please Enter you Salary : ")
//let salary;
if(salary < 20000){
     fedTax = 0;
    console.log(`Your Federal Tax will be  ${fedTax} : `)
    
}
else if(salary < 50000){
    fedTax = salary * 0.05
    console.log(`Your Federal Tax will be  ${fedTax} : `)
}
else if(salary >= 50000){
    fedTax = salary * 0.1
    console.log(`Your Federal Tax will be  ${fedTax} : `)
}