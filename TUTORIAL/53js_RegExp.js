// JS RegExp: Matching a Pattern
let pattern = /world/i;  // Case-insensitive match

let text = "Hello, World!";
let isMatch = pattern.test(text);

console.log("Pattern Matched:", isMatch);
