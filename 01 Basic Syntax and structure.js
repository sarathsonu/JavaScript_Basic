/*
JavaScript is a lightweight, interpreted programming language. 
 It is commonly used to create dynamic and interactive elements in web applications.
 JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.
 JavaScript is used by most websites for client-side scripting, to create interactive web pages and web applications
 JavaScript is also used in mobile and desktop app development, game development, and server-side programming with technologies such as Node.js.
 */

// output in console
console.log("Hello World! Welcome to JavaScript");

//Multi-line comments start with /* and end with */. Single line comments start with //


/*
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
*/

a="I am declared using Automatically without anty keyword"; //Automatically
var b = "I am declared using Var"; // var 
let c = "I am declared using Let"; //let
const d = "I am declared using Const"; //const

console.log(a);console.log(b);console.log(c);console.log(d);

// Data Type (String, Number, Boolean, Null, Undefined, Object, Array)

/*
JavaScript data types can be categorized as primitive and non-primitive
primitive data types −

Strings of text e.g. "This text string" etc.
Numbers, eg. 123, 120.50 etc.
Boolean e.g. true or false.
null
undefined
BigInt
Symbol
Object
Array

object and array are non-primitive
BigInt and Symbol are introduced in ES6. In ES5, there were only five primitive data types.

BigInt
JavaScript stores only 64-bit long floating point numbers. If you want to store a very large number, you should use the Bigint. 
You can create Bigint by appending n to the end of the number.

Symbol
It is used to create unique primitive, and immutable values.
The Symbol() constructor can be used to create a unique symbol, and you may pass the string as a parameter of the Symbol() constructor.
*/

var str = "Hello World";
var num = 123;
var bool = true;
var nullVar = null;
var undefVar = undefined;
var BigInt = 1245646564515635412348923448234842842343546576876789n;
var sym = Symbol("Hello World");
var obj = {name:"John", age:30};
var arr = [1,2,3,4,5];

console.log(str);console.log(num);console.log(bool);console.log(nullVar);console.log(undefVar);console.log(BigInt);console.log(sym);
console.log(obj);console.log(arr);