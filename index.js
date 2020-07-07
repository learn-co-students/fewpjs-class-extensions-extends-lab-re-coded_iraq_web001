// Your code here
class Polygon{
  constructor(sideArr){
    this.sideArr = sideArr
  }
  get countSides(){
    return this.sideArr.length
  }
  
  get perimeter(){
    let sum=0;
   for(let i=0; i<this.sideArr.length; i++){
      sum += this.sideArr[i] 
    }
    return sum
  }
 
}

class Triangle extends Polygon{
  
  get isValid(){
    
    return (this.sideArr[0] + this.sideArr[1] > this.sideArr[2] && this.sideArr[0] + this.sideArr[2] > this.sideArr[1] && this.sideArr[2] + this.sideArr[1] > this.sideArr[0])
  }
}
    

class Square extends Polygon{
  
  get isValid(){

    return (this.sideArr[0]===this.sideArr[1] && this.sideArr[1]===this.sideArr[2] &&
    this.sideArr[2]===this.sideArr[3])
    
  }
  get area(){
    return this.sideArr[0] * this.sideArr[0]
  }
}

let polygon = new Polygon([2,2,2])
Polygon.perimeter()

let triangle = new Triangle([4,4,4])
triangle.isValid()

let square = new Square([7,7,7,7])
square.area()
square.countSides()
square.isValid()