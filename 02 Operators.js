/*
Operators in Js
----------------
In JavaScript, an operator is a symbol that performs an operation on one or more operands,
such as variables or values, and returns a result.
JavaScript operators are symbols used to perform specific mathematical, comparison, assignment, and logical computations on operands.
->Arithmetic Operators
->Comparison Operators
->Assignment Operators
->Logical (or Relational) Operators
->Bitwise Operators
->Miscellaneous Operators
*/

/*
Arithmetic Operators
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
*/
let x = 10;
let y = 3;
console.log(x + y); // Output: 13
console.log(x - y); // Output: 7
console.log(x * y); // Output: 30
console.log(x ** y); // Output: 1000
console.log(x / y); // Output: 3.3333333333333335
console.log(x % y); // Output: 1
x++; // Increment
console.log(x); // Output: 11
x--; // Decrement
console.log(x); // Output: 10

/*
Comparison Operators
>	Returns true if the left operand is greater than right else, false.
<	Returns true if the left operand is lesser than right else, false.
>=	Returns true if the left operand is greater than or equal to right else, false.
<=	Returns true if the left operand is lesser than or equal to right else, false.
==	Returns true if both the operands are same else, false./td>
==	Returns true if both the operands are the same else, false.
!=	Returns true if both the operands are not same else, false.
!== Returns true if both the operands are not equal, returning a Boolean result even if they are of different types
     "not equal value or not equal type"
*/
let a = 10; // for more understanding change the datatype to string and give both as same number eg: a="20" b=20
let b = 20;
console.log(a > b); // Output: false
console.log(a < b); // Output: true
console.log(a >= b); // Output: false
console.log(a <= b); // Output: true
console.log(a == b); // Output: false
console.log(a === b); // Output: false
console.log(a != b); // Output: true
console.log(a !== b); // Output: true

/*
Assignment Operators
=	Assignment
+=	Addition assignment
-=	Subtraction assignment
*=	Multiplication assignment
/=	Division assignment
%=	Modulus assignment
**=	Exponentiation assignment
*/
let c = 10;
c += 5; // c = c + 5
console.log(c); // Output: 15
c -= 3; // c = c - 3
console.log(c); // Output: 12
c *= 2; // c = c * 2
console.log(c); // Output: 24
c /= 2; // c = c / 2
console.log(c); // Output: 12
c %= 3; // c = c % 3
console.log(c); // Output: 0
c **= 2; // c = c ** 2
console.log(c); // Output: 0

/*
Logical (or Relational) Operators
&&	Logical and
||	Logical or
!	Logical not
*/
let d = 10;
let e = 20;
console.log(d > 5 && e > 10); // Output: true
console.log(d > 5 || e > 10); // Output: true
console.log(!(d > 5)); // Output: false

//----------------- end of basice operators ------------

// Es6
/*
Bitwise Operators
&	Binary AND
|	Binary OR
^	Binary XOR
~	Binary NOT

**"Note : its an advance topic"** 
<<  Binary Left shift	
>>  Binary Right shift
>>> Binary Zero fill Right shift
JavaScript uses 32-bit Bitwise operands. A number is stored as a 64-bit floating-point 
number but the bit-wise operation is performed on a 32-bit binary number i.e. 
to perform a bit-operation JavaScript converts the number into a 32-bit binary number (signed) 
and performs the operation and converts back the result to a 64-bit number.


*/
let f = 5; // 00000101
let g = 3; // 00000011
console.log(f & g); // Output: 1 (00000001)
console.log(f | g); // Output: 7 (00000111)
console.log(f ^ g); // Output: 6 (00000110)
console.log(~f); // Output: -6 (11111010)
console.log(f<<g);// Output: 40 
console.log(f>>g);// Output: 0
console.log(f>>>g);// Output: 0


// **"Note:its an advance topic"**
/*
Miscellaneous Operators
??	Nullish Coalescing
?.	Optional Chaining

? : (Conditional )	If Condition is true? Then value X : Otherwise value Y typeof	It returns the data type of the operand.
?? (Nullish Coalescing Operator)	It returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
                                    delete	It removes a property from an object.
, (Comma)	It evaluates its operands (from left to right) and returns the value of the last operand.
() (Grouping)	It allows to change the operator precedence.
yield	It is used to pause and resume a generator function.
… (Spread)	It is used to expand the iterables such as array or string.
** (Exponentiation)	Raises the left operand to the power of the right operand

There are few other operators supported by JavaScript. 
These operators are conditional operator (? :), typeof operator, delete operator, etc.
we will discuss about this topic in detain on Advance JS
*/
let h = null;
let i = "Hello";
console.log(h ?? i); // Output: "Hello" (if h is null, return i)
console.log(h ?. i); // output: undefined (if h is null, return undefined)



