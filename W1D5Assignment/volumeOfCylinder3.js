// 2. volumeOfCylinder

//     c. Write code to call and test your function

const prompt = require("prompt-sync")();
var myRadius = (prompt("Enter the radius of your circle :", 0));
var myHeight = (prompt("Enter the height of the cylinder :", 0))
var area ;

function volumeOfCylinder(myRadius, myHeight){

  return (myHeight * myRadius * myRadius * Math.PI);
      
function calculateArea(myRadius) {
  return ( myRadius * myRadius * Math.PI);
  
}

function MyArea() {

  var area = calculateArea(myRadius);
  return console.log(MyArea(myRadius));
  }  

}
volumeOfCylinder(myRadius, myHeight)
console.log(volumeOfCylinder(myRadius, myHeight))