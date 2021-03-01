// // // 1. Write the outputs of flowing JavaScript program, next to the comments
// let x = 1;
// let y = '2';
// let z = true;
// let s = x + y;
// console.log(s) // output?  // 12
// console.log(typeof s) // output?  // string
// x = x + z;
// console.log(x) // output?   //  2 
// console.log(typeof x) // output?    // number
// y = x++ * y;
// console.log(x); // output?  //  3
// console.log(typeof x); // output?  // number
// s = parseInt(s)
// s+='3';
// console.log(s); // output?   // 123
// console.log(typeof s); // output?  // string
// z= !z;
// console.log(z); // output?  // false
// console.log(typeof z); // output? // boolen

// let x = 0;
//  x++;
//  console.log(x);   // 1
//  ++x;
//  console.log(x);   // 2
//  console.log(++x);  // 3
//  console.log(x);   // 3
//  console.log(x++);  // 3
//  console.log(x);   // 4

// let x = 0;
//  let y = "hello";
//  let z = x || "Hi";
//  console.log(z);    //  Hi
//  let w = y || 5;
//  console.log(w);    // hello

// let x = 5;
// let y = 7+'';   // this is string 
// console.log(x+y);   // 57   // do concatenation


// for(let count = 1; count <= 10; i++){
//     console.log(count);   // i is not defined
//    }
  

//    for(let count = 1; count <= 10; count++){
//     console.log(count);   // 10
//    }
  

//   for(let count = 1; count <= 10; count++){
//     console.log(count);   // 10
//    }
//    console.log(count); // value of count here? refference error

//What will be the output?

// let x = 1, y = 7;
// let message = "Hi";
// if (x < 2) {
//  if (y > 7) {
//  message = "Bye";
//  }else{
// message = "HOla";
// }
// } else {
//  message = "Hello";
// }
// console.log(message);  // Hola


//7. Given the following JavaScript code, how many times will the computer display the word "Goodbye"?

// for (let i = 0; i > 3; i++) {
// console.log("Goodbye");                  // 0 times
// }

// 8. Given the following JavaScript code, how many times will the computer display the word "Snow"?

// let i = 0;
// while (i < 3) {
// console.log("Snow"); // infinite times ,since no increament or decrement, i remain 0 , so it wii display for ever
// }   


// let x = null;
// let y;
// console.log(typeof(x));  //  object
// console.log(typeof(y));  //  undefined
// console.log(x++);       //  0
// y++;
// console.log(x , y);       //1 NAN
// y = false;
// console.log(x < y);       // false
// x += "2";
// console.log(x);         //  12
// console.log(x > y);     //  true   // twelve > false  // 1 > 0

//1. Fill in the blanks

// const x = 5;
// console.log(x);  // 5
// if(x==5){
// let y = 2*x;
// console.log(y);  // 10
// console.log(x);  // 5
// }
// console.log(x);  // 5
// //console.log(y);  // refference error

// let x;
// if(x) {
// const y=5
// };
// console.log(y);  //  refference error

// let x;
// if(!x) {
// const y=5
// };
// console.log(y);   // refference error

//1. How many times loop will be executed in following scenarios?

// for(let i = 0; i > 10; i++){
//     console.log(i);           // 0 loop , no execution
//    }


// for(let i = 0; i <= 10; i--){
//     console.log(i);   // infinite loop
//    }
   

// let i = 1;
// while(i < 10){
//  console.log(i); // infinite loop
// }


// let i = 1;
// while(i < 10){
//  console.log(i);  // infinite loop
//  i--;
// }

// for(let i = 1; i < 10; i++){
//     if(i % 3 === 0) break;
//     console.log(i);           //1 2
//    }

// for(let i = 1; i < 10; i++){
//     if(i % 3 === 0) continue;
//     console.log(i);            // 1 2 4 5 7 8
//    }


// let x = null;   // null can converted to 0 when arithimetic operation
// let z = x + 3;
// let w = x - 5;
// console.log(w) ; // -5
// console.log(z) ; //  3
// let y;
// console.log(typeof(x));  // object
// console.log(typeof(y));  // undefined
// console.log(x++);        // 0 and x become  1 , after operation
// y++;
// console.log(x,y);        // 1 NaN
// y=false;
// console.log(x < y);        //  false ( 1 < 0 )
// x+="2";                  // x = x + " 2 "
// console.log(x);          //  12
// console.log(x > y);        //  true


// let x = 1, y = 7;
// let message = "Hi";
// if (x < 2) {
//  if (y > 7) {
//  message = "Bye";
//  }else{
// message = "HOla";
// }
// } else {
//  message = "Hello";
// }
// console.log(message);  //Hola

// Given the following JavaScript code, how many times will the computer display the word "Goodbye"?

// for (let i = 0; i > 3; i++) {
// console.log("Goodbye");         //0 loop
// }

//Given the following JavaScript code, how many times will the computer display the word "Snow"?
// let i = 0;
// while (i < 3) {
// console.log("Snow");   //  infinite loop
// }

// Write a program that asks for users age and prints "Happy Birthday!" based on the age. For e.g.
// if the user enters 5, program should print "Happy Birthday!" five time.

// const prompt = require("prompt-sync")();
// const age = +prompt(" Please Enter your age : ");

// for(let i = 0; i < age ; i++){

//     if(age === 5){

//         console.log(" Happy Birthday ! ")
    
//   }
// //   else 
// //     console.log("Try again : ")
// }

