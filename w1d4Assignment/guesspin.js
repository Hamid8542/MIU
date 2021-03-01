/*
3. Write a JavaScript program that gives the user three tries to guess the correct pin of the
   account. You set the pin as a constant. When correct display “Correct, welcome back.” When
   incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
   locked out.”
*/
const prompt = require('prompt-sync')();
let pin = +prompt('Enter the pin code : ');
let attemps = 0;
const correctPin = 1234;

if(pin === correctPin && attemps <= 3) {

   console.log("Correct , Welcome Back !");  
}
        
   while(pin !== correctPin && attemps < 3){
     console.log("PIN is incorrect! Try again!" );  
     pin = +prompt('Enter the pin code : ') 
    attemps++
   }

  if( attemps > 3){
     console.log("PIN is incorrect! You are Blocked! See you!");
   }
  

 
