// 3. Write a program that calculates the total volume of a house, including the volume of the roof
//    space. Your program must allow the user to enter width, depth, height and sweep as shown in
//    figure below. Write code to call and test your function. 

// Here are some helpful formulas:
// houseVolume = livingVolume + roofVolume
// livingVolume = width * height * depth
// roofVolume = triangleArea*depth
// triangleArea = √s(s−a)(s−b)(s−c)
// s = (a+b+c)/2
// Write separate functions for each of the named formulas

const prompt = require("prompt-sync")();
var myWidth = (prompt("Enter Width :", 0));
var myDepth = (prompt("Enter Depth :", 0))
var myHeight = (prompt("Enter Height :", 0))
var mySweep = (prompt("Enter sweep :", 0))

