// MAP, REDUCE, FILTER

//Map
//map is used to transform an array

let arr = [1,2,3,4,5]

function double(x){
    return x*2
}

function binary(x){
    return x.toString(2)
}

let result = arr.map(binary)

console.log(result)

console.clear()
//return full name
let users=[
    {firstName:"Anusha",secondName:"Motamarri",Age:26},
    {firstName:"Sudha",secondName:"Murthy",Age:70},
    {firstName:"Ratan ",secondName:"Tata",Age:80},
]

let fullName = users.map((x)=>{
return x.firstName+x.secondName
})
console.log(fullName)