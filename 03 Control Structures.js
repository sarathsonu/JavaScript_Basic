/*
Conditional Statements 
-----------------
JavaScript conditional statements allow you to execute specific blocks of code based on conditions.
 If the condition is met, a particular block of code will run; otherwise, another block of code will execute based on the condition.
 There are several types of conditional statements in JavaScript:
 1. if statement
 2. if-else statement
 3. if-else-if statement
 4. switch statement
*/
// 1. if statement

let age = 25;
if (age >= 18) {
    console.log("You are eligible to vote.");
    };// Output: You are eligible to vote.

// 2. if-else statement
let Age = 15;
if (Age >= 18) {
    console.log("You are eligible to vote.");
    } else {
        console.log("You are Not eligible to vote.");
        };// Output: You are Not eligible to vote.

// 3.if-else-if statement
let marks = 75;
if (marks >= 90) {
    console.log("Grade: A+");
    } 
    
else if (marks >= 80) {
        console.log("Grade: A");
        } 
else if (marks >= 70) {
            console.log("Grade: B");
            } 
else {
        console.log("Grade: C");
    };// Output: Grade: B


// 4. switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        };// Output: Today is Wednesday

// The break statement "jumps out" it breaks out of the switch block.
// The default keyword specifies the code to run if there is no case match

// Nested if…else
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
    if (temperature > 30) {
        console.log("It's a hot day!");
    } else if (temperature > 20) {
        console.log("It's a warm day.");
    } else {
        console.log("It's a bit cool today.");
    }
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
} else {
    console.log("Check the weather forecast!");
};//Output:It's a warm day.



/*Nested if…else statements in JavaScript allow us to create complex conditional logic by 
checking multiple conditions in a hierarchical manner.
 Each if statement can have an associated else block, and within each if or else block, you can nest another if…else statement.
This nesting can continue to multiple levels, but it’s important to maintain readability and avoid excessive complexity
*/