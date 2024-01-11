// JS Classes: Class Declaration and Usage
class Rectangle {
  constructor(width, height) {
      this.width = width;
      this.height = height;
  }

  calculateArea() {
      return this.width * this.height;
  }
}

let rectangle = new Rectangle(4, 5);
console.log("Area of Rectangle:", rectangle.calculateArea());
