//Write a program that takes x and y co-ordinates of two points as
//inputs and computes distance between these two points based on
//the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2

// <><><><><>><><><      <><><><><><><>


const prompt = require ("prompt-sync")();

const x1 = prompt (" Enter x1 coordinate : ")
const y1 = prompt (" Enter y1 coordinate : ")
const x2 = prompt (" Enter x2 coordinate : ")
const y2 = prompt (" Enter y2 coordinate : ")
const xdiff = x1 - x2;
const ydiff = y1 - y2;
const sumsquares = Math.pow(xdiff,2) + Math.pow(ydiff,2);
const distance =  Math.sqrt(sumsquares)

console.log(" Expected 5 for points, 0 0 and 3 4 : ", distance)
