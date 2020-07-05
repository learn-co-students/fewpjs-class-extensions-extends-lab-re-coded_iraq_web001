// Your code here
class Polygon{
  constructor(sides){
    this._sides = sides;
    this._countSides = this._sides.length
  }
  set sides(sides){
    this._sides = sides
  }
  get countSides(){
    return this._countSides
  }
  get perimeter(){
    let sum = 0
    for (let side of this._sides){
      sum+=side
    }
    return sum;
  }
}
class Triangle extends Polygon{
  get isValid(){
    if (this._countSides!=3)return false
    let a = this._sides[0]
    let b = this._sides[1]
    let c = this._sides[2]
    return ((a + b> c) && (a + c > b) && (b + c > a))
  }
}
class Square extends Polygon{
   get isValid(){
    if (this._countSides!=4)return false
    let a = this._sides[0]
    let b = this._sides[1]
    let c = this._sides[2]
    let d = this._sides[3]
    return ((a === b) && (a === c) && (a === d))
  }
  get area(){
    if (!this.isValid) return
    return this._sides[0]**2
  }
}