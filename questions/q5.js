// Array slice method


let arr = [1,2,3,4,5]

console.log(arr.slice(2,4)) // prints [3,4]
console.log(arr) // prints [1,2,3,4,5]


//slice does not modify original array. 
// arr.slice(n,m) returns array with indices a[n...m-1]