//what are the different ways of creating javascript objects?

/* 1. Object Literal (Object Initializer)*/

var car = {
    name : "ford",
    number:"AP1234",
    color:"Red"
}
console.log(car)

/* 2. using the constructor function. */
/* If you call a function using a new operator, the function acts as a constructor and returns an object.*/

function Car(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color
}

var car1 = new Car('ford', 'AP1234',"Red");
console.log(car1);

/* 3. using Object.create */

var ElectricCar = Object.create({},{
    name:{
        value:'ford',
        enumerable:'true' //--> not writing enumerable:true will not print the property
    },
    number:{
        value:'AP1234',
        enumerable:'true'
    },
    color:{
        value:'Red',
        enumerable:'true'
    }
});
console.log(ElectricCar); 

/* using ES6 Classes*/

class CustomCar{
    constructor (name, number,color){
        this.name = name
        this.number=number
        this.color =color
    }
}

var fordCar = new CustomCar( "ford","AP1234","Red")
console.log(fordCar)