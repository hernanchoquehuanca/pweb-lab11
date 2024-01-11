// JS Hoisting: Variable and Function Hoisting
console.log(hoistedVariable); // Undefined, not an error
var hoistedVariable = "I am hoisted";

hoistedFunction(); // Works because function declarations are hoisted
function hoistedFunction() {
    console.log("Function is hoisted");
}
