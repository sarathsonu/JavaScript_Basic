/*
Functions
----------
A function in JavaScript is a group of reusable code that can be called anywhere in your program. 
It is used to perform a specific task.
Functions can take arguments, which are values passed to the function when it is called.
Functions can also return values, which can be used by the code that called the function.

*/
/*Function Declaration
Syntax
    function functionName(parameter-list) {
        statements
     }*/

function greet(name) {
    console.log(`Hello, ${name}!`);
    }
greet("sarath") //function call
// Function Expression
/*The Function expression in JavaScript allows you to define a function as an expression.
Syntax
const varName = function (parameter-list) {
    statements
};
 */
const greet2 = function(name) {
    console.log(`Hello, ${name}!`);
    };
greet2("prakash")
// Parameters and Arguments
// Parameters are the variables declared in the function definition.
// Arguments are the values passed to the function when it is called.

function sum(a, b) {
    return a + b;
    }
// return statement
// The return statement is used to exit a function and return a value.
// If no return statement is used, the function will return undefined.
console.log(sum(5,6));; // Output: 8
