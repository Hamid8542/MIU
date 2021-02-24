/*
Write a program to compute sales commission based on following
rules:
 If the salesman is salaried then
 These is no commission for sales below $300
 1% for sales between $300 and $500 (exclusive)
 2% for sales above $500
 If the salesman is not salaried then
 2% for sales between $300 and $500 (exclusive)
 3% for sales above $500 
*/
const prompt = require("prompt-sync")();
let sales = +prompt(" Please enter the sales : ")
let salaried = +prompt(" Are you salaried : yes or no : ")
//let salaried  = yes;
if(salaried === "yes"){
  if(sales < 300){
      console.log("No commision, Sorry")
  }
  else if(sales < 500){
      console.log(" 1 % commision " , .01 * sales);
  }
  else (sales > 500)
    console.log(" 3% commision " , .02 * sales);
  }

else{
    if(sales < 300){
        console.log("No commision, Sorry")
    }
    else(sales > 500)
        console.log(" 2 % commision " , .03 * sales);

}
