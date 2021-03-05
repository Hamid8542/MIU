"use strict";

exports.addends = addends;
//exports.getMiddle = getMiddle;
 exports.rotateLeft = rotateLeft;
 exports.rotateRight = rotateRight;
//exports.rotateNRight = rotateNRight;
// exports.matrixAddition = matrixAddition;
// exports.addends = addends;
 
exports.filterPalindromes = filterPalindromes;
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {number} sum of end elements
 */

// 1 Write a function addend(arr) that accepts an array of numbers as parameters 
//   and returns the sum of first and last elements of the array. 

function addends(arr) {
     
    const endsum = arr[0] + arr[arr.length - 1];
     return endsum;
    
}

// function isEven(arr)
//         {
//         let mid = (arr[0] + (arr[arr.lengthn- 1])) / 2; 
//         return mid ;  
//         }

// function getMiddle(arr) {

//             let mid = (arr[0] + (arr[arr.lengthn - 1])) / 2;
//             if (mid % 2 == 0)
//                 {
//                 let evenMid = isEven(arr);
//                 return  evenMid ;   
//             }
//             else 
//                 {
//                  return mid ;    
//             }
//         }

        function rotateLeft(arr){
            let first = arr.shift();
            arr.push(first);
            return arr;
        }

        function rotateRight(arr){
            let last = arr.pop();
            arr.unshift(last);
            return arr;
        }

//         function rotateNRight(arr) {
           
//             // strip all negatives off the end
//          while (arr.length && arr[arr.length - 1] < 0) {
//             arr.pop();
//          }
//         for (let i = arr.length - 1; i >= 0; i--) {
//          if (arr[i] < 0) {
//        // replace this element with the last element (guaranteed to be positive)
//           arr[i] = arr[arr.length - 1];
//           arr.pop();
//     }
//  }
//             let count ;
//             count -= arr.length * Math.floor(count / arr.length);
//             arr.push.apply(arr, arr.splice(1, count));
//             return arr;
//           }

        //   const rotateNRight = (arr, count = 1) => {
        //     return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
        //   }

        // function filterPalindromes (arr) {
        //         return arr == arr.split('').reverse().join('');
        //       }

        function filterPalindromes(arr) {
               
                for (let i = 0; i < arr.length / 2; i++)
                  if (arr[i] !== arr[arr.length - i - 1])
                    arr.push(arr[i])
                  // return false;
                    return arr;
              }