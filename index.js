// Your code here
class Polygon{
  constructor(arr){
    this.array=arr;
  }
  get countSides(){
   return this.array.reduce( (acc) => acc+1 , 0)
  }
  get perimeter(){
    return this.array.reduce((acc,val) => {
      return acc+val
    },0)
  }
}
class Triangle extends Polygon{
  
  get isValid(){
    if(this.array.length === 3 && (this.array[0] + this.array[1]) > this.array[2] && (this.array[1] + this.array[2]) > this.array[0] && (this.array[0] + this.array[2]) > this.array[1])
    return true
  
     else {
    return false;
  }
  }
}


class Square extends Polygon{
  get isValid(){
    if( this.array.length ===4 && this.array[0] === this.array[1] && this.array[0] === this.array[2] && this.array[0] === this.array[3] && this.array[1] === this.array[2] && this.array[1] === this.array[3] && this.array[2] === this.array[3])
    return true
    else{
      return false
    }
  }
  
  
  get area(){
    return (this.array[0] ** 2)
  }
}




