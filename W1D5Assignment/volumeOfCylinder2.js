// 2. volumeOfCylinder
//     b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use
//        of the areaOfCircle function.

// Here are some helpful formulas:
// houseVolume = livingVolume + roofVolume
// livingVolume = width * height * depth
// roofVolume = triangleArea*depth
// triangleArea = √s(s−a)(s−b)(s−c)
// s = (a+b+c)/2
// Write separate functions for each of the named formulas

const prompt = require("prompt-sync")();
var myRadius = (prompt("Enter the radius of your circle :", 0));
var myHeight = (prompt("Enter the height of the cylinder :", 0))
var area ;

function calvolumeOfCylinder(myRadius, myHeight){
     return (myHeight * myRadius * myRadius * Math.PI);
      
 }

 function volumeOfCylinder() {

   let volume = calvolumeOfCylinder(myRadius, myHeight);
  
 }
volumeOfCylinder(myRadius, myHeight);
console.log(calvolumeOfCylinder(myRadius, myHeight))