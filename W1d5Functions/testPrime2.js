function testPrime(number){

    for (let i = 2; i < number; i++){
        if(number % i === 0){
            return " Not Prime ";
        }
    }
   return " Prime ";
}

console.log("Expect prime for 5 : ", testPrime(5));
console.log("Expect Not Prime for 9 : ", testPrime(9));
