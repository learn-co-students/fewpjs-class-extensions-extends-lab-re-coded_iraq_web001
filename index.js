// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

let polygon = new Polygon([5, 5, 5]);
// console.log(polygon);
// console.log(polygon.countSides);
// console.log(polygon.perimeter);

class Triangle extends Polygon {
  get isValid() {
    if (this.sides.length == 3) {
      let a = this.sides[0];
      let b = this.sides[1];
      let c = this.sides[2];
      if (a + b > c && a + c > b && c + b > a) {
        return true;
      }
    }
    return false;
  }
}

let triangle2 = new Triangle([5, 5, 5]);
console.log(triangle2);

class Square extends Polygon {
  get isValid() {
    if (this.countSides == 4) {
      let a = this.sides[2];
      return this.sides.every(side => side == 5);
    }
  }
  get area() {
    if (this.isValid) return this.sides[1] * this.sides[0];
  }
}

let newSq = new Square([5, 5, 5, 1]);
console.log(newSq);
