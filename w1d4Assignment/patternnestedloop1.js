/*
Write JS code to print following patterns using nested loops.

1
22
333
4444
55555
*/

for (let i = 1; i <= 5; i++){
    let row = " ";
    for (let j = 1; j <= i; j++){
      row += i +"\t" ;
    }
      console.log(row)
    }
    
     
