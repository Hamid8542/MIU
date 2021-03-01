// Write a defining table and JavaScript program that asks user to guess a number between 1 and
// 10 until the user enters 5. Program also keeps track of number of attempts user made before
// guessing the correct number that is 5. Program should output following results based on the
// attempts made:
// 1. If user guessed 5 in first attempt, program should print "Awesome!"
// 2. If user guessed 5 in second attempt, program should print "Great!"
// 3. If user guessed 5 in third attempt, program should print "Not bad!"
// 4. Otherwise, program should print "It took you n attempts!", where n is the number of
// attempts user made before guessing the correct answer.

const prompt = require('prompt-sync')();
let guess = +prompt('Enter your guess number : ');
let attemps = 1;
const yourGuess = 5 ;

if(guess === yourGuess && attemps === 1) {

   console.log("Awesome !");  
}
else if (guess === yourGuess && attemps === 2){

    console.log(" Great !");  
}
else if (guess === yourGuess && attemps === 3){

    console.log(" Not Bad !");  
}

// } 
// else if (guess === correctPin && attemps === 5){

//             console.log(" Great !");  

   while(guess !== yourGuess && attemps > 3 ){
     console.log("Your Guess is incorrect! Try again!" );  
     guess = +prompt('Enter your guess number code : ') 
    attemps++
   }

  if( attemps > 4){
      console.log("It took you n attempts!");
 }
  