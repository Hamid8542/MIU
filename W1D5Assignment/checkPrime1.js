// 1. checkPrime
//    a. Write a function named checkPrime that accepts a parameter and returns true if the
//       argument is a prime number otherwise returns false.


function checkPrime(number){

    for (let i = 2; i < number; i++){
        if(number % i === 0){
            return " Not Prime ";
        }
    }
   return " Prime ";
}

console.log(checkPrime(9));
console.log(checkPrime(11));
