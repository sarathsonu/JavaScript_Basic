/*
Jump Statements (break, continue, return) in js
----------------------------------------------
break: Terminates the current loop or switch statement.
continue: Skips the rest of the current iteration and proceeds to the next iteration of the loop.
return: Exits a function and returns a value to the calling code.
goto: JavaScript does not have a goto statement.
 */
// break
// The break statement terminates the current loop and continues execution of the code with the statement immediately following the loop.
// The break statement can be used in both while and for loops.

// The following example uses a break statement to terminate a loop when i is equal to 3:
var i = 0;
while (i < 10) {
    if (i == 3) break;
    console.log(i);
    i++;
    }

    // The following example uses a break statement to terminate a switch statement when the value of i is equal to 3:
    
    var i = 0;
    switch (i) {
        case 0:
            console.log("i is 0");
        break;
        case 1:
            console.log("i is 1");
        break;
        case 2:
            console.log("i is 2");
        break;
        case 3:
            console.log("i is 3");
        break;
        default:
            console.log("i is greater than 3");
            }

    // continue
    // The continue statement skips the current iteration of a loop and continues execution with the next iteration.
    // The continue statement can be used in both while and for loops.

    // The following example uses a continue statement to skip the current iteration of a loop when i is equal to 3:
        
    var i = 0;

        while (i < 10) {
            if (i == 3) continue;
            console.log(i);
            i++;
            }
    // return
    // The return statement terminates execution of the current function and returns a value to the caller.

    // The following example uses a return statement to terminate a function and return the value 5:
    
    function myFunction() {
        return 5;
        }
                                  

