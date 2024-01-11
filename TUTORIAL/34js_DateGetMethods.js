// JS Date Get Methods: Getting Year, Month, and Day
let today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();

console.log("Year:", year);
console.log("Month:", month + 1); // Note: Months are zero-based
console.log("Day:", day);
