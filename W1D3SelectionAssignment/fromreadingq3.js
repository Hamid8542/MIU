// 3. Will output change if value of foo is a ‘0’ (0 in quotes) instead?

var foo = "0";
switch (foo) {
 case -1:
   console.log('negative 1');
   break;
 case 0:
   console.log(0);
 case 1:
   console.log(1);
   break;
 case 2:
   console.log(2);
   break;
 default:
   console.log('default');
}

// The out put will be : default
//This is beacuse when we assign foo = "0" it is not a number , nothing will be executed except default