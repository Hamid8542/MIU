"use strict";
/* eslint-disable */

exports.insertArray = insertArray;
exports.isArrayEqual = isArrayEqual ;
exports.isPalindrome = isPalindrome ;
exports.reverse2String = reverse2String ;
exports.enhancedIncludes = enhancedIncludes;
//exports.ssReverse = ssReverse ;
//exports.merge = merge;
//exports.shiftPush = shiftPush;


/* 0.Write a function that will take an index and two arrays and splice the second array into the first at the given position */

/**
 * 
 * @param {number} index is integer for array index
 * @param {Array} target is array to be spliced
 * @param {Array} insert holds elements to splice
 * @returns {Array} the spliced array
 */
function insertArray(index, target, insert){

    target.splice(index, 0, ...insert);
    return target;

}

/* 1.	Write a function, isArrayEqual, that returns true if two arrays have === elements, else false; */

/**
 * 
 * @param {Array} arr 
 * @returns {Array} 
 */
 function isArrayEqual(a, b) {

        return Array.isArray(a) && Array.isArray(b) && a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }
      

// /* 2.	Write a function that checks if an array is palindrome by using push and pop array methods to reverse 
//        the  array and then isArrayEqual method you wrote for 1.  */
// /**
//  * 
//  * @param {Array} 
//  */

   function isPalindrome(arr){
    let letters = [];
    let reverseWord = [];
    for (let i = 0; i < arr.length; i++) {

        letters.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
    
         reverseWord.pop(arr[i]);
    }

    //return isArrayEqual(arr);
    
     return Array.isArray(arr) && Array.isArray(arr) && arr.length === arr.length &&
     arr.every((val, index) => val === arr[index]);
     
  
}

// /* 3. Write a function, reverse2String,  that transforms a given array as following. Use appropriate array methods. 
//      Input (Array) 	          Output (String) 
// ['Quick', 'Brown', 'Fox'] 	"Fox_Brown_Quick" */

// /**
//  * 
//  * @param {Array} arr 
//  * @returns str
//  */

function reverse2String(arr){

    let array = arr.reverse();
    let str = array.join("_");
    
    return str;
}

// /*
// 4. Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a value to 
//    search in the array and return an array result with three values.
//       a. First value is boolean representing if the search value exists in the array.
//       b. Second value is the first index of value found in the array or -1
//       c. Third value is the last index of value found in the array or -1.
// */

/**
 * @param {Array}
 * @returns {boolean}
 * @returns {number}
 * @returns {number}
 * 
 */

function enhancedIncludes(arr, n){

    for(let i = arr.length; i >= 0 ;i --){

      
      if(arr[i] === n){
      // return true;
      // let newArr = [];
      // newArr.push(arr[i]);
      // newArr.push(arr[0]);
      // newArr.push(arr[i]);
      // return newArr;
    return [n , arr[0], (arr.length[i])];
      }
    } 
    return false;
  }



// /* 5. Write a function, ssReverse, that returns reversed copy of a given array (original array should remain intact). 
// // Do this without using reverse method, instead use splice and slice methods.  */

// /**
//  * 
//  * @param {Array} Array 
//  * @returns{Array} Array
//  */

// // function ssReverse(Array) {
    
// //   //  let reverseArray = Array.splice().reverse(); 
// //     let newArray = Array.slice();
// //     Array = Array.slice( Array.length )
// //     Array = Array.reverse();
// //     return Array;

// // }

// /**
//  * 
//  * @param {Array} arr 
//  * @returns {Array}
//  */ 

// function shiftPush(arr){

// }

/*   6. (EC) Write a function that merges two sorted arrays into one single sorted array. Make use of shift 
        and push array methods. */

/**
 * 
//  * @param {Array} arr1, and arr2
//  * @returns {Array} arr
//  */        

//   function merge(arr1, arr2) {
//   //function mergeAndSort(a1, a2) {
//       let matchCount = 0;
//       let ret = [];
    
//       for (let i = 0; i < arr1.length; i++) {
//         let val = arr2[matchCount];
//         if (arr1[i] > val) {
//           ret.push(val)
//           matchCount++
//           i--;
//           continue;
//         }
//         if (arr1[i] > 0) {
//           ret.push(arr1[i]);
//         }
//       }
//       console.log(ret.join())
//       return ret;
//     }
    
    
//     // let arrayOne = [3, 6, -1, 11, 15, -1, 23, 34, -1, 42]
//     // let arrayTwo = [7, 19, 38];
//     // let arrayThree = [1, 9, 28];
//     // let arrayFour = [1,2,5]
  
//     merge(arr)
//  //   merge(arrayOne, arrayTwo)

            


    
          


        