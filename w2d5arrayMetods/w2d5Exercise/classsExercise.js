// Write a function, invert, that will reverse an array and output the reversed elements as a string with an optional separator.

/**
 * 
 * @param {*} arr 
 * @param {*} separator 
 * @returns 
 */

function invert(arr, separator){
    const reversed = arr.reverse();
    const joined = reversed.join(separator);
    return joined;

}

const myArray = ["Sam", "am", "I"];
 const result = invert(myArray, "<<<>>>") ;
 console.log(result)        //→ “I<<>>am<<>>Sam”
// Or
// invert(myArray) → “I am Sam”


// function student() {

//     // Reverse the order of the elements in an array
// let list = ["zewdu", "legese", "Haylu", "Alebachgew"];
// student.reverse(list);
// //console.log(student)
// // OUTPUT: Mango,Apple,Orange,Banana

// }
// console.log(arr(student)(list))