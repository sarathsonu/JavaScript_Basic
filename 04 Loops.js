/*
Loops in JS
Loops offer a quick and easy way to do something repeatedly
Loops can execute a block of code a number of times.
Loops are handy, if you want to run the same code over and over again, each time with a different value.
There are several types of loops in JavaScript:

1. For Loop
2. While Loop
3. Do While Loop
4. For In Loop
5. For Of Loop
*/

// 1. For Loop
// A for loop is used to execute a block of code for a specified number of iterations.
// The syntax :
// for (initialization; condition; increment/decrement){
//     code to be executed
// }

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  }

// 2.While Loop
// A while loop executes a block of code as long as the specified condition is true.
// The syntax :
// while (condition){
//     code to be executed
// }
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(x);
}

// 3.Do while Loop
// A do while loop is similar to a while loop, except that it will execute the block of
// code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// The syntax :
// do{
//     code to be executed
// }while (condition)
let i = 0;
do {
    i += 1;
    console.log( "Value of i",i);
    } while (i < 5);

// 4.For In Loop
// A for in loop is used to loop through the properties of an object.
// The syntax :
// for (variable in object){
//     code to be executed
// }
let person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
    console.log(person[x]);
    }

// 5.For Of loop
// A for of loop is used to loop through the values of an iterable object (Array).
// The syntax :
// for (variable of iterable){
//     code to be executed
// }
let cars = ["BMW", "Volvo", "Mini"];
for (let x of cars) {
    console.log(x);
    }
    

