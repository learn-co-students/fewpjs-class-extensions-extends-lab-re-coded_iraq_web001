// Your code here
class Polygon {
  constructor(arr){
    this.arr= arr;
  }

  get countSides (){
    return this.arr.length ;
  }

  get perimeter(){
    let sum =0
    for (const int of this.arr){
      sum+=int;
    }
    return sum;
  }
}

// const tri = new Polygon([3,3,3])
// console.log(tri.countSides());
// console.log(tri.perimeter());
// console.log(' ---------- ');


class Triangle extends Polygon{
 get isValid(){
  let side1 = this.arr[0]
  let side2 = this.arr[1]
  let side3 = this.arr[2]

  if (side1 + side2 > side3 && side1+side3>side2 && side2+side3>side1){
    return true
  }else{
    return false
  }

}
}

// const triiii = new Triangle([3,3,7])
// console.log(triiii.perimeter());
// console.log(triiii.countSides());
// console.log(triiii.isValid());
// console.log('--------');


class Square  extends Polygon{

  get isValid(){
    let first = this.arr[0];
  for (let i = 1; i < this.arr.length; i++) {
    if (first !== this.arr[i]) {
      return false;
    }
  }
  return true;
  }

   get area(){

      let side = this.arr[0];
      return side **2;


  }
}
// const muraba3 = new Square([5,5,5,5])
// console.log(muraba3.countSides());
// console.log(muraba3.perimeter());
// console.log(muraba3.isValid());
// console.log(muraba3.area());