// An IIFE (Immediately Invoked Function Expression)
(function () {
    // Function Logic Here.
})();

(() => {
    // …
})();

(async () => {
    // …
})();

(function () {
    // Function Logic Here.
})();
// ==============================================

// Immediately Invoked:
// --------------------------------------------------
// This part is easy to explain and demonstrate.
// This type of function is called immediately invoked as these functions are executed as soon as they are mounted to the stack, it requires no explicit call to invoke the function. If we look at the syntax itself we have two pairs of closed parentheses, the first one contains the logic to be executed and the second one is generally what we include when we invoke a function, the second parenthesis is responsible to tell the compiler that the function expression has to be executed immediately.
//
//
// Function Expressions:
// --------------------------------------------------
// It is simple to understand that a Function Expression is a Function that is used as an expression. JavaScript lets us use Functions as Function Expressions if we Assign the Function to a variable, wrap the Function within parentheses or put a logical not in front of a function. The following program illustrates the different ways we can create a Function Expression.

// Creating Function Expression by assigning to a variable.
var myFunc = function () {
    return "GeeksforGeeks";
};

// Creating Function Expression Using Logical Not.
!function () {
    return "GeeksforGeeks";
};

// Creating Function Expression Using Parentheses.
(function () {
    return "GeeksforGeeks";
});

// ===============================================================
// Regular Function.
function Greet() {
    console.log("Welcome to GFG!");
}
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function () {
    console.log("Welcome to GFG!");
})();

// ===============================================================

// The module pattern
// We would also use IIFE to create private and public variables and methods.
const makeWithdraw = (balance) =>
    ((copyBalance) => {
        let balance = copyBalance; // This variable is private
        const doBadThings = () => {
            console.log("I will do bad things with your money");
        };
        doBadThings();
        return {
            withdraw(amount) {
                if (balance >= amount) {
                    balance -= amount;
                    return balance;
                }
                return "Insufficient money";
            },
        };
    })(balance);
