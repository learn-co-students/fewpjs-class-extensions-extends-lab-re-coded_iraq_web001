// Your code here
class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr
    this.count = this.sidesArr.length
  }
  get countSides() {
    return this.sidesArr.length;
  }
  get perimeter() {
    if(!Array.isArray(this.sidesArr)) return;
    let sum=0;
    for(let i=0; i<this.sidesArr.length ; i++){
      sum+=this.sidesArr[i];
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid(){
    if(!Array.isArray(this.sidesArr)) return;
    if(this.count !== 3) return;
    let side1 = this.sidesArr[0]
    let side2 = this.sidesArr[1]
    let side3 = this.sidesArr[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  get isValid(){
    if(!Array.isArray(this.sidesArr)) return;
    if(this.count !== 4) return;
    let side1 = this.sidesArr[0]
    let side2 = this.sidesArr[1]
    let side3 = this.sidesArr[2]
    let side4 = this.sidesArr[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }
  get area() {
    if (!Array.isArray(this.sidesArr)) return;
    if (this.count !== 4) return;
    return this.sidesArr[0] * this.sidesArr[0]
  }
}
