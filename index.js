// Your code here
class Polygon {
  constructor(sides) {
    this.sides=sides;
  }
  get countSides(){
    return this.sides.length;
  }
  get perimeter (){
    this.perimeter =0;
    for( side of this.sides){
      this.perimeter +=side;
    }
    return this.perimeter ;
  }
}

class Triangle extends Polygon {
  constructor() {

  }
  get isValid(){
   this.perimeter===3? true:false;
  }
}
