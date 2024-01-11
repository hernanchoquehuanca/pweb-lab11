// JS this Keyword: Understanding Context
let person = {
  name: "John",
  greet: function() {
      console.log("Hello, " + this.name);
  }
};

person.greet();
