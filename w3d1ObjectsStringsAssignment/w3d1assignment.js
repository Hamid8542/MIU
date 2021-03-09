// W3D1 Objects and Strings

// Implement the following and test your code using the Mocha test file objectStringTests.js in the
// mochaTests folder in the 301DemosNew repository.. Follow the standard submission instructions.

// 1. Write the code, one line for each action:

// a. Create an empty object car

   // const car = {};

// b. Add the property name make with value Toyota

    //const car = {make : "Toyota"};

// c. Add the property name model with value Camry

    const car = {make : "Toyota" ,
                 model : "Camry"
                };
     
// d. Print the object

   console.log(car) ;

// e. Without modifying the code structure of the object, change the value of the model to RAV4.

    car.model = "RAV4";
   // console.log(car);

// f. Print the object

    console.log(car);

// g. Without modifying the code structure of the object, Remove property make from the object

    delete car.make;

// h. Print the object
  
    console.log(car);

// 2. Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects It can assume 
//    that the only properties it needs to check are name and age

// /**
//  * 
//  * @param {object} obj1 
//  * @param {object} obj2 
//  * @returns{boolean} true if value equal  
//  */

const sam1 = { name: "Sam" ,
               age: 10
 };

 const sam2 = { name: "Sam" ,
                age:10 
 };

const john = { name: "John" ,
               age: 10
            };

function isPersonEqual(obj1, obj2) {
    if(obj1.name === obj2.name && obj1.age === obj2.age ){

       return true;
    }else{

       return false;
    }
} 
  console.log("Expectewd true : " , isPersonEqual(sam1, sam2))
  console.log("Expectewd false : " , isPersonEqual(sam1, john))
 

/**
 * 
 * @param {object} obj 
 * @returns {number} number of properties
 */

// 3.1 Write the function countProperties(obj) which returns number of properties of an object.


let user1 = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
     function countProperties(user1){

        for (let key in user1) {

           // console.log(key);  //  john, 30, true
        }
           return key ;  
        }
                
      console.log(countProperties(user1));

// 3.2 Write the function countProperties(obj) which returns number of values of an object.

/**
 * 
 * @param {object} obj 
 * @returns {number} number of properties
 */

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
     function countProperties(user){

        for (let prop in user) {

            console.log( prop ); // name, surname, ages
          }

           return user ;  
    }
                
      console.log(countProperties(user));


// 4. Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize",
// otherwise return false.

/**
 * 
 * @param {string} str 
 * @returns {boolean} true if 
 */

    function checkSpam(str) {
        let lowerStr = str.toLowerCase();
      
        return lowerStr.includes("lottery") || lowerStr.includes("prize");
      }

   console.log(checkSpam("lottery"));
   console.log(checkSpam("prize"));
   console.log(checkSpam("anything"));

// 5. Write a function named suffix that returns the common suffix of two strings. For example, the
// common suffix of “swimming” and “walking” is “ing”. This function takes two parameters and
// returns the common suffix.


/**
 * 
 * @param {String} str1 
 * @param {String} str2 
 * @returns {String}
 */

function suffix(str1, str2){



    return 
}

console.log(suffix("swimming", "walking"))

// 6. Write a function named titleCase with one parameter named s. This function returns a copy of s
// but with the first letter of each word capitalized.

/**
 * 
 * @param {String} str 
 * @returns {String}
 */

function titleCase(str) {

  //  return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
      return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });

  }
  console.log(titleCase("i am a maharishi international university student"));


//   function titleCase(str) {
//     str = str.split(' ');
  
//     for (i = 0; i < str.length; i++) {
//       str[i] = str[i].toLowerCase().split('');
//       str[i][0] = str[i][0].toUpperCase();
//       str[i] = str[i].join('');
//     }
  
//     return str.join(' ');
//   }
  
//   titleCase("i am a maharishi international university student");



// 7. Write the function getAverageAge(users) that gets an array of objects with two properties
// name and age and returns the average age.

// Input Output
// [{name:"abc", age:20},
// {name:"xyz", age:10}]
// 15 (average of 10 and 20)

const people = [
    {
      name: "abc",
      age: 20
    },
    {
      name: "xyz",
      age: 10
    }, 
  ];
  
  function getAvg(arr){
   return (people.reduce((sum, {age}) => (sum + age), 0))/arr.length;
  }
  console.log(getAvg(people));

// const people = [
//     {
//       name: "abc",
//       age: 20
//     },
//     {
//       name: "xyz",
//       age: 10
//     }
// ]

// let getAverageAge = arr => {
//     let reducer = (total, currentValue) => total + currentValue;
//     let sum = arr.reduce(reducer)
//     return sum / arr.length;
//   }
  
//   let ages = people.map(person => person.age);
  
//   console.log(getAverageAge(ages));

 // console.log(getAverageAge(people))



 
// 8. Write a function to return the sum of the first elements of the inner arrays for arrays with the
// following structure. Use a for .. of loop.
// arr = [[1, 2], [3, 4], [5, 6]]
// console.log(sumFirst(arr)); → 9
// From Reading:
// 1. How can you make a copy of an object?
// 2. How do you remove the white spaces that may be at the beginning and ending of a string
// value?




