
// const prompt = require("prompt-sync")();
// let lcm;
// // take input
// const number1 = prompt('Enter a first positive integer: ');
// const number2 = prompt('Enter a second positive integer: ');

// // looping from 1 to number1 and number2
  
//       // maximum number between n1 and n2 is stored in lcm
//       lcm = (number1 > number2) ? number1 : number2;
  
//       // Always true
//       while(true) {
//         if( lcm % number1 === 0 && lcm % number2 === 0 ) {
//           console.log(`The LCM of ${number1} and ${number2} is ${lcm} `);
//           break;
//         }
//         ++lcm;
//       }




const prompt = require("prompt-sync")();
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

let isLCM = function() {
     let lcm;
    while(true) {
        if(lcm % number1 === 0 && lcm % number2 === 0 ) {
       return  lcm = console.log(`The LCM of ${number1} and ${number2} is ${lcm} `);
          break;
        }
        ++lcm;
      }
    }
    isLCM();