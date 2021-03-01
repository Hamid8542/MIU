// Write a function named testPrime that returns true when
// argument to the function is a prime number, otherwise returns false.
//    • Now call the function to test if user input is prime or not.




function testPrime(n)
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
console.log(testPrime(11))
console.log(testPrime(9))