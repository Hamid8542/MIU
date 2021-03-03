// 7. Write a function compute, that takes three parameters. First parameter is a call back
//    function that does the actual operation, second and third are the operands.
 
// For e.g., compute (add, 2,3) should return 5
//    - Write compute function as a function expression.
//    - Write add function as a function expression and call compute passing add as a callback.
//        o Refactor to pass add logic as an anonymous function. (Make a copy first)
//        o Refactor to pass add logic as an arrow function. (Make a copy first)

// let calculation;
// let result;
let doMath = (number1, number2, callback) => {
    let result = callback(number1, number2);
    console.log("The result is: : " + result);
   };

//callback(number1,number2);

doMath(2,3, function(number1,number2){
    let calculation = number1 + number2;
    return calculation;
   });
  