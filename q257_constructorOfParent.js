class Rectangle{
    constructor(l,b){
        this.width = l;
        this.height=b;
    }
  
}

class Square extends Rectangle {
    constructor(length,breadth) {
      super(length, breadth);
      this.name = 'Square';
    }
  
    get area() {
      return this.width * this.height;
    }
  
    set area(value) {
      this.area = value;
    }
  }

  let squareObj = new Square(3,5)
 
  console.log(squareObj.area)