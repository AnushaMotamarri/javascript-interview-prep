/* what is prototype chain?*/

/* PROTOTYPE: It is an object that is attached to each datatype thats created in JS.
this attached object contains some hidden methods which can be accessed directly via a dot '.' operator*/

let arr = ['anusha' , 'Motamarri']

// arr will get attached with Array.prototype object.
/*we can think of it as Array is the parent class, Array class has some functions defined.
when even an instance of Array is created, (arr in this example) Array's methods will get attached to arr */

console.log(arr.__proto__) 
console.log(Array.prototype)

//both of the above lines output same prototype


/*Array class is not the top most class. Array is the subtype of Object class.
so even arr.__proto__ will have another prototype defined. i.e., object's prototype
*/

console.log(arr.__proto__.__proto__)
console.log(Array.prototype.__proto__)
console.log(Object.prototype)

//all of the above 3 lines output same prototype

//lets create an instance of Object
let obj = {
    firstname:'Anusha',
    lastname:'Motamarri'
}
// object will get attached with Object.prototype object.
/*we can think of it as Object is the parent class, Object class has some functions defined.
when even an instance of Object is created, (obj in this example) Objects's methods will get attached to obj */
console.log(obj.__proto__)
console.log(Object.prototype)

//both of the above lines output same prototype

//Object is the topmost type in the chain. So Object's prototype will not have any prototype

console.log(Object.prototype.__proto__) 
console.log(Array.prototype.__proto__)

//all the above 3 will output null

//functions

function fun(){
    //
}
console.log(fun.__proto__)
console.log(Function.prototype)
//bth of the above will output same prototype

//function is subtype of Object. so fun.__proto__.__proto__ will be = Object.prototype

console.log(fun.__proto__.__proto__ , Object.prototype)

console.log(fun.__proto__.__proto__.__proto__) // will result in null as there is no class higher than object


/*

The prototype chain looks like this.
Array -> Object->null
Function->Object->null
Object->null

*/

/* 
Possible Interview questions :
1. Write Polyfills for bind method (using prototypal inheritence)
*/
