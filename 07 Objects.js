/* JavaScript Object
----------------- 
In JavaScript, an object is a collection of key-value pairs. The keys are strings, and the
values can be any type of value, including strings, numbers, booleans, arrays, functions,
and even other objects.
*/
// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Developer",
    };

// Accessing object properties
console.log(person.firstName); // Output: John  
console.log(person.lastName); // Output: Doe
console.log(person.age); // Output: 30
console.log(person.occupation); // Output: Software Developer



/*
JavaScript Object Properties
---------------------------
In JavaScript, object properties are the values associated with a key in an object.
Properties can be added, removed, and modified at any time.
*/

// Adding a new property
person.country = "USA";
console.log(person.country); // Output: USA
// Modifying a property
person.age = 31; 
console.log(person.age); // Output: 31

// Removing a property
delete person.occupation;
console.log(person.occupation); // Output: undefined

/*
JavaScript Object Methods
---------------------------
In JavaScript, object methods are functions that are part of an object.
*/

// Creating an object with methods
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    // Method
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);   
    }
    };
// Accessing or calling object method
person.greet(); // Output: Hello, my name is John Doe

// Nested Objects
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
        }   
    };
    
// Accessing nested object properties
console.log(person.address.street); // Output: 123 Main St