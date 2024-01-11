// JS JSON: Parsing and Stringifying
let jsonData = '{"name": "John", "age": 30}';
let parsedData = JSON.parse(jsonData);

console.log("Parsed Data:", parsedData);

let jsonString = JSON.stringify(parsedData);
console.log("JSON String:", jsonString);
