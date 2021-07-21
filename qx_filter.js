// MAP, REDUCE, FILTER

//Filter
//Filter is used to pick certain elements from an array

let arr = [1,2,3,4,5]

function isOdd(x){
    return x%2
}

let result = arr.filter(isOdd)

console.log(result)

console.clear()
//return full name
let users=[
    {firstName:"Anusha",secondName:"Motamarri",Age:26},
    {firstName:"Sudha",secondName:"Murthy",Age:70},
    {firstName:"Ratan ",secondName:"Tata",Age:80},
]
//return whose age is more than 60
let fullName = users.filter((x)=>{
return x.Age>60
})
console.log(fullName)

//return first names of people whose age is greater than 60
let fullName1 = users.filter((x)=>{
return x.Age>60
}).map((x)=>{
    return x.firstName
})
console.log(fullName1)


//NOTE: This can be done using reduce as well. refer qx_reduce.js
