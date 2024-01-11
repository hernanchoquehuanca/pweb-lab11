// JS Scope: Global and Local Scope
let globalVariable = "I am global";

function exampleFunction() {
    let localVariable = "I am local";
    console.log(globalVariable); // Accessing global variable
    console.log(localVariable);  // Accessing local variable
}

exampleFunction();
