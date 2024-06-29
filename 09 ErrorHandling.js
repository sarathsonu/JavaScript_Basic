/*Basic Error Handling in JS
-----------------------
Basic error handling in JavaScript revolves around the try...catch...finally statement:
1. The try block: This block contains the code that might throw an error.
2. The catch block: This block catches and handles any error that occurs in the try block. It takes an error object as an argument, which contains information about the error.
3. The finally block (optional): This block contains code that will always be executed, regardless of whether an error was thrown or not.

Common Error Types in JavaScript:
SyntaxError: Thrown when there is a syntax error in the code.
TypeError: Thrown when a value is not of the expected type.
ReferenceError: Thrown when trying to access a variable that does not exist.
RangeError: Thrown when a value is not in the allowed range.

*/
//Example 1: Basic Error Handling
try {
    console.log("This will be executed first.");
    throw new Error("Something went wrong!");
    console.log("This will not be executed.");
    } catch (error) {
        console.log("An error has occurred:", error.message);
        } finally {
            console.log("This will always be executed.");
            }
//Example 2: Nested try...catch...finally Statements
try {
    try {
        console.log("This will be executed first.");
        throw new Error("Something went wrong!");
        console.log("This will not be executed.");
        } catch (error) {
            console.log("An error has occurred:", error.message);
            } finally {
                console.log("This will always be executed.");
                }
                } catch (error) {
                    console.log("An error has occurred:", error.message);
                    } finally {
                        console.log("This will always be executed.");
    }


      
    function f() {
        try {
          console.log(0);
          throw "bogus";
        } catch (e) {
          console.log(1);
          // This return statement is suspended
          // until finally block has completed
          return true;
          console.log(2); // not reachable
        } finally {
          console.log(3);
          return false; // overwrites the previous "return"
          console.log(4); // not reachable
        }
        // "return false" is executed now
        console.log(5); // not reachable
      }
      console.log(f()); // 0, 1, 3, false
      





// You can use the throw statement to create custom errors:
    function divide(a, b) {
        if (b === 0) {
          throw new Error("Division by zero!");
        }
        return a / b;
      }
      
      try {
        let result = divide(10, 0);
      } catch (error) {
        console.error(error.message); // Outputs: "Division by zero!"
      }