// 4. When to choose Function Declaration versus Function Expression?

// Use function declarations :
//  > when you want to create a function on the global scope and make it available throughout your code.
// Use function expressions :
//  > to limit where the function is available, 
//  > keep your global scope light, and maintain clean syntax.

//5. Function are values in JavaScript. They can be assigned, copied, or declared in any
//   place of the code. Is this a true or a false statement? Support your answer with examples.

// Yes it is true ; this is because :
// Functions are values. They can be assigned, copied or declared in any place of the code.
//   > If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
//   > If the function is created as a part of an expression, it’s called a “Function Expression”.
//   > Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
//   > Function Expressions are created when the execution flow reaches them.


// Which Is Better: A Function Declaration or a Function Expression?
// Should you prefer a function declaration like the following?

// function id(x) {
//     return x;
// }

// Or the equivalent combination of a var declaration plus a function expression?

// var id = function (x) {
//     return x;
// };

// They are basically the same, but function declarations have two advantages over function 
// expressions:

// They have a name (see The Name of a Function). However, JavaScript engines are getting better 
// at inferring the names of anonymous function expressions.