// /*
// Write JS code to print following patterns using nested loops.
// 55555
// 4444
// 333
// 22
// 1
// 1
// 12
// 123
// 1234
// 12345
// */

for (let i = 1; i <= 5; i++){
    let row = " ";
    for (let j = 5; j <= i; j--){
      row += j +"\t" ;
    }
      console.log(row)
}
// let a;
// let n = prompt("Enter a number for the no. of rows in a pattern");
// for(let i = 1 ; i <= n ; i++)
//  {
//   for(let j = 1 ; j <= i ; j++)
//    {
//     console.log(j + " " );
//    }
//   // console.log(" br ");



//   for(i = 1; i <= 5; i++){

//   for(j = 1; j <= i; j++){
//     row += i + "\t" ;
//     console.log(j);
//   }
//    if(j == i)
//    continue;
//    else
//    console.log(j);
//    }
  