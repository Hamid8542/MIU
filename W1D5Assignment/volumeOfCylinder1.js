// 2. volumeOfCylinder
//     a. Write a function, areaOfCircle, that computes and returns area of a circle based on the
//        value of input radius.
//     c. Write code to call and test your function


// Here are some helpful formulas:
// houseVolume = livingVolume + roofVolume
// livingVolume = width * height * depth
// roofVolume = triangleArea*depth
// triangleArea = √s(s−a)(s−b)(s−c)
// s = (a+b+c)/2
// Write separate functions for each of the named formulas

const prompt = require("prompt-sync")();
let radius = (prompt("Enter the radius of your circle :", 0));

function calculateArea(radius) {
  return (radius * radius * Math.PI);
  
}

function MyArea() {
  let area = calculateArea(radius);
 
}

MyArea(radius);
console.log(calculateArea(radius))

