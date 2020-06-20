// Your code here
class Polygon {
  constructor(arr) {
    this.sides = arr;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    let reducer = this.sides.reduce((accu, current) => accu + current, 0);
    return reducer;
  }
}
class Triangle extends Polygon {
  get isValid() {
    return (
      this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[1] + this.sides[2] > this.sides[0] &&
      this.sides[0] + this.sides[2] > this.sides[1]
    );
  }
 
}

class Square extends Polygon {
  get isValid() {
      return (this.sides[0] === this.sides[1] && this.sides[2] ===this.sides[3] && this.sides[0] === this.sides[3])
  }

  get area() {
      return (this.sides[0] * this.sides[1])
  }
}
