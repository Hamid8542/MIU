// Write a JavaScript program that asks radius of a circle as input form the user and prints the area of the
// circle using formula (πr2). Program should keep on prompting user to enter correct value,
// until the value enter is a positive number. Use Math object for getting the value of π and getting
// the square of the radius.

const prompt = require("prompt-sync")();
let radius = +prompt(" Please Entyer Radius Of A Circle : ")
let height = prompt("Please Enter Height of Cylinder : ")
let area = 0;
let volume = 0;
function areaOfCircle(radius) {
    area =  Math.floor(Math.PI * radius * radius  );
    return area;
}
    console.log(areaOfCircle(radius));

    function volumeOfCylinder(height){
       volume = area * height;
       return volume;

    }
    console.log(volumeOfCylinder(height));