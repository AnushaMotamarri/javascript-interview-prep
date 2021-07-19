// maps and objects in js

let myMap = new Map() // maps have only one way of creation, where are object supports 4 ways as discussed in q1.js

myMap.set("firstName","Anusha")
myMap.set("lastName","Motamarri")
myMap.set(1,1)
myMap.forEach((value,key)=>{
console.log(value,typeof key) // 1 remains as integer , its not converted to int
}) //object is not iterable


let object =new Object({
    
firstName:"Anusha",
lastName: "Motamarri",
1:"1"

})
let keys =  Object.keys(object)
console.log(keys) // prints all keys as strings

/* accessing keys*/

console.log(object.firstName) // dot operator
console.log(myMap.get("firstName")) //inbuilt get method which is slower


/*Check if a key already exists:*/
console.log(myMap.has(1)); //returns boolean true or false
console.log(object["1"] ===undefined) // use equality operator

/*Getting the size:*/
console.log(myMap.size)
console.log(Object.keys(object).length)

/*Adding a new element*/
myMap.set(4, 5);
object["Demo"]="Map vs Object";
/*
The key difference is that Objects only support string and Symbol keys
 where as Maps support more or less any key type.
 */
