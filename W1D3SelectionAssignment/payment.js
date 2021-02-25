/*
3. Write a program that calculates down payment for a home loan based on following rules.
Cost of House Down                                Payment
$0 to less than 50K                             5% of the cost
$50K to less than 100K                          $1000 + 10% of (cost - $50K)
$100K to less than 200K                         $2000 + 15% of (cost - $100K)
$200K and above                                 $5000 + 10% of (cost - $200K)

*/


const prompt = require('prompt-sync')();
let housecost = prompt("How much is  your House Cost :");

    if(housecost < 50000){
        
        downPayment = (housecost * 0.05) ;
    }
      else if (housecost < 100000) {
        downPayment = ((housecost - 50000) * 0.1 + 1000);
   }
      else if (housecost < 200000) {
         downPayment = (2000 + 0.2*(housecost - 100000));
   }
else(housecost >= 200000)
        downPayment = ((housecost - 200000) * 0.01 + 5000);
        console.log(`Your downPayment will be ${downPayment}`)  
