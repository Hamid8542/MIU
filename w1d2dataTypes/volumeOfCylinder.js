// Write a program that computes volume of a cylinder based on user
//inputs for radius and height of a cylinder, using formula v = πr2h
// <><><><><><>     <><><><><><>     <><><><><><>

const prompt = require ("prompt-sync")();
let radiusOfCylinder = prompt("please enter the radius of a cylinder?: ")
let hegitOfCylinder = prompt("please enter the height of a cylinder?: ")

const volume = Math.floor(Math.PI * radiusOfCylinder * radiusOfCylinder * hegitOfCylinder)
console.log(`The Volume Of a Cylider is :  ${volume}`)

