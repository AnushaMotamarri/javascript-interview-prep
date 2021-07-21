//REDUCE reduces the entire array to one single value

//reduce takes two arguments a callback fun and one other value
// callback fun takes two arguments "accumulator"(the value till now) and "value"(the current value while reduce iterates)
// the other argument to reduce is the initial value of accumulator
let arr = [1,2,3,4,5]
//find the sum of array
let sum = arr.reduce((acc,val)=>{

    acc= acc+val
    return acc

},0) //initialize acc to 0

console.log(sum)


let users=[
    {firstName:"Anusha",secondName:"Motamarri",Age:26},
    {firstName:"Sudha",secondName:"Murthy",Age:70},
    {firstName:"Ratan ",secondName:"Tata",Age:80},
]
//return first names of people whose age is greater than 60
let firstNames = users.reduce((names,curr)=>{
    curr.Age>60&&names.push(curr.firstName) // if curr.Age>60 then push the first name into names array
return names // do not forget to return the accumulator
},[])//initialize names to empty arr []
    
console.log(firstNames)