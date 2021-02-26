/*
1. A prime number (or a prime) is a natural number greater than 1 that is not a product of two
smaller natural numbers. In other words, it is a number that is only perfectly divisible by number
1 and itself. 
Write a JavaScript program to test weather user input is a prime number or not.
a.  Your logic should be based on factor count. i.e., prime number will have 0 factors (not
    counting 1 and itself), while composite will have 1 or more factors.
    
b. This time think of a logic to use break statement so that you can break early from the
    loop, right when you know number is not prime. For example, you know number 8 is not
    prime right on the first loop because it is perfectly divisible by 2 itself, that's why further
    testing is not required. If the number is prime loop will proceed until the end.

*/
function isPrime(n)
{
    let flag = 0;
  for (let i = 2; i <= n-1; i++)
  {
    if( n % i == 0)
    {    
       flag = 1 ;      
       break;
    }
  }

  if(flag == 0)
  {
    return " The number " + n +  "  is Prime Number " ;
  }
  else 
  {
    return " The Number " + n +  "  is not Prime number" ;
  }
}
console.log(isPrime(11))
console.log(isPrime(9))