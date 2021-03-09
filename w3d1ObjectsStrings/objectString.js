"use strict";
/* eslint-disable */

exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties ;
exports.checkSpam = checkSpam ;
exports.suffix = suffix ;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;

/*
2.	Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
It can assume that the only properties it needs to check are name and age
*/
/**
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
 * @returns {boolean} 
 */
    const sam1 = { name: "Sam", age: 10 };
    const sam2 = { name: "Sam", age: 10 };
    const john = { name: "John", age: 10 };

function isPersonEqual(sam1, sam2) {
    if(sam1.name === sam2.name && sam1.age === sam2.age ){

       return true;
    
    }else{

        return false
   }
}
console.log(isPersonEqual(sam1, sam2));
console.log(isPersonEqual(sam1, john));

/*
3.	Write the function countProperties(obj) which returns number of properties of an object.
*/
/**
 * 
 * @param {Object} obj 
 * @returns {Object}
 */
//  const bob = {
//     name: "Bob",
//     age: 10,
//   };
  const bob = { name: "Bob", age: 10 }

function countProperties(bob) {
    
    for(let prope in bob) {
        return prope
    }   
}                 
    console.log(countProperties(bob));
    




/*
4.	Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", otherwise return false. 
*/

/**
 * 
 * @param {string} str 
 * @returns {boolean} true if 
 */

    function checkSpam(str) {
        let lowerStr = str.toLowerCase();
      
        return lowerStr.includes("lottery") || lowerStr.includes("prize");
      }

//    console.log(checkSpam("lottery"));
//    console.log(checkSpam("prize"));
//    console.log(checkSpam("anything"));


/*
5.	Write a function named suffix that returns the common suffix of two strings. For example, the common suffix of “swimming” 
and “walking” is “ing”. This function takes two parameters and returns the common suffix.
*/


function suffix(){


    return 
}
  console.log(suffix("jackson, johnson", "son"))


// 6.	Write a function named titleCase with one parameter named s. This function 
//     returns a copy of s but with the first letter of each word capitalized.

/**
 * 
 * @param {String} str 
 * @returns {String}
 */

 function titleCase(str) {

     const jackson = "jackson";

    //  return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return str.toLowerCase().replace(/(?:^|\s)\S/g, function(s) { return s.toUpperCase(); });
  
    }
    console.log(titleCase("jackson"));
  

/*
7.	Write the function getAverageAge(users) that gets an array of objects with two properties name and age and returns the average age.
Use for .. of
*/

const people = [{name:"Sam", age:20},  {name:"Fred", age:10}];

function getAverageAge(arr){
    return (people.reduce((sum, {age}) => (sum + age), 0))/arr.length;
   }
   console.log(getAverageAge(people));


/* 8.	Write a function, sumFirst, to return the sum of the first elements of the inner arrays for arrays with the following structure. 
Use a for .. of loop.  
arr = [[1, 2], [3, 4], [5, 6]]  
*/

/**
 * 
 * @param {Array} arr 
 * @returns {Number} Sum
 */

function sumFirst(arr){


    return 
}
