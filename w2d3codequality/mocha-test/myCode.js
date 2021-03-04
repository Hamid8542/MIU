
let doMath = (number1, number2, callback) => {
    let result = callback(number1, number2);
    console.log("The result is: : " + result);
   };

//callback(number1,number2);

doMath(2,3, function(number1,number2){
    let calculation = number1 + number2;
    return calculation;
   });
  