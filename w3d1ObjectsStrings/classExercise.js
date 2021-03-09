
// Write code that creates three different person objects, sam1, sam2,john

// • Assume for this domain that all person objects have name and age properties
// • Use object literals to create the objects
// • sam1 and sam2 both have values “Sam” and 10
// • john has values “John” and 10

const sam1 = { name: "Sam" ,
               age: 10
 };

 const sam2 = { name: "Sam" ,
                age:10 
 };

const john = { name: "John" ,
               age: 10
            };
   
// Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
//   • assume that the only properties it needs to check are name and age
//   • Call it with sam1 and sam2 and verify it returns true
//   • Call with sam1 and john and verify false


// /**
//  * 
//  * @param {object} obj1 
//  * @param {object} obj2 
//  * @returns{boolean} true if value equal  
//  */
function isPersonEqual(obj1, obj2) {
     if(obj1.name === obj2.name && obj1.age === obj2.age ){

        return true;
     }else{

        return false;
     }
} 
   console.log("Expectewd true : " , isPersonEqual(sam1, sam2))
   console.log("Expectewd false : " , isPersonEqual(sam1, john))
  
// console.log(isPerswonEqual(Sam1, Sam2))

// for (let char of "Hello") {
//     console.log(char);             // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
//     }


// for(let i =0; i < "Hello".length; i++){
//     console.log("Hello"[i]);      // // H,e,l,l,o (char becomes "H", then "e", then "l" etc)

// } 

// • Write a program that keeps on asking for user input and prints it, until user types the word 
//   "stop" (without quotes). "Stop" word can be in any case (small, capital or mixed)


const prompt = require("prompt-sync")();
let input;
do{
     input = prompt("Say Something : ");
     input = input.toLowerCase();

} while(input !== "stop");



// // • Write a function that takes a comma separated string of words and converts it into an array 
// //    of words and prints in reverse order.

// function reverseStringWords(str) {

//     const wordArray = str.split(",");
//     wordArray.reverse();
//     for(const word of wordArray){
//         console.log(word);
//     }
    
// }
//  console.log(reverseStringWords("Today,is,hot!!"));

 // • Write a function to replace the first occurrence of "for" in an input string with 4.

//  function replace4(str) {
   
//     const findex = str.indexOf("for");
//     const substring1 = str.substr(0, findex);
//     const substring2 = str.substr(findex + 3, str.length -1);

//     return substring1 + 4 + substring2 ;

//  }

//  const teststr = "find the first for in this for string";
//  console.log(replace4(teststr));