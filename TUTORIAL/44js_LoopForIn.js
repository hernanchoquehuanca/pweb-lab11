// JS Loop For In: For...In Loop
let person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
