/*
Arrays in Js
 Arrays are used to store multiple values in a single variable.
 An array is a special type of variable that can hold more than one value at a time.
 Arrays are defined by placing the values inside square brackets `[]` and separated by commas.
*/

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Array Methods (push, pop, shit, unshift, slice, splice)

// push() - adds one or more elements to the end of an array
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]
// pop() - removing one or more elements to the end of an array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
// unshift()- adds one or more elements to the start of an array
fruits.unshift("Grapes");
console.log(fruits); // Output: ["Grapes", "Apple", "Banana","Cherry"]  
// shift() - removing one or more elements to the start of an array
fruits.shift();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
