// what is array splice

/*

The splice() method is used either adds/removes items to/from an array, 
and then returns the removed item. The first argument specifies the array position for 
insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. 
Each additional argument is added to the array.

*/

let arr = [1,2,3,4,5]

console.log(arr.splice(2,1)) // prints [3]
console.log(arr) // prints [1,2,4,5]


//Splice modifies the original array