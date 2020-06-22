class Polygon{
  constructor(arrayOfInt){
    this.sides = arrayOfInt;
  }
  
  get countSides(){
    return this.sides.length;
  }
  
  get perimeter(){
    let sum = this.sides.reduce((acc, curr) => {
      return acc += curr;
    }, 0);
    return sum;
  }
}

class Triangle extends Polygon{
  get isValid(){
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    
    if(side1 + side2 > side3 && side3 + side2 > side1 && side1 + side3 > side2){
      return true;
    }else{
      return false;
    }
  }
}

class Square extends Polygon{
  get isValid(){
    for(let i = 0; i < this.sides.length; i++){
      if(this.sides[i] == this.sides[i+1]){
        return true;
      }else{
        return false;
      }
    }
  }
  
  get area(){
    return this.sides[0]**2;
  }
}

