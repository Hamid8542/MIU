/*
4. A university library that loans book to students, faculty, and the public has a written policy that
determines how long someone may borrow a book before it is due, which is shown on the table
below. Write a defining table and JavaScript program that determines how long a person may
borrow a book.
Status            Number of books Overdue            Loan duration in weeks
Student                    0                                    6
                      fewer than 3                              4
                       3 or more                                2
Faculty                   0                                     12
                       fewer than 3                             10
                       3 or more                                8
Other                        0                                  4
                       fewer than 3                             3
                       3 or more                                2

*/

const prompt = require('prompt-sync')();
let Status = prompt("Tell me Your status , I will tell you your loan duration in weeks :");
let numberOfBooksOverDue = prompt(" Please enter the number of books : ");
// let faculty;
// let student;
// let others;

if((Status === "student" && numberOfBooksOverDue=== 0 )){

  console.log(" Your Loan Duration is 6 weeks "); 
}

else if(Status === "student" && numberOfBooksOverDue < 3 ){

  console.log(" Your Loan Duration is 4 weeks ") 
}
else if(Status === "student" && numberOfBooksOverDue >= 3){

console.log(" Your Loan Duration is 2 weeks") 
}
else if(Status === "faculty" && numberOfBooksOverDue === 0){

console.log(" Your Loan Duration is 12 weeks ") 
}
else if(Status === "faculty" && numberOfBooksOverDue < 3){

console.log(" Your Loan Duration is 10 weeks " )
}
else if(Status === "faculty" && numberOfBooksOverDue >= 3){

console.log(" Your Loan Duration is 8 weeks ") 
}
else if(Status === "others" && numberOfBooksOverDue === 0){

console.log(" Your Loan Duration is 4 weeks ") 
}
 else if(Status === "others" && numberOfBooksOverDue < 3){

console.log(" Your Loan Duration is 3 weeks ") 
}
else if(Status === "others" && numberOfBooksOverDue >= 3){

 console.log(" Your Loan Duration is 2 weeks ") 
}