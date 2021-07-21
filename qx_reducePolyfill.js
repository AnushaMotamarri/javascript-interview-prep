let arr = [1,2,3,4,5]
//find the sum of array
let sum = arr.reduce((acc,val)=>{

    acc= acc+val
    return acc

},0) //initialize acc to 0

console.log(sum)

Array.prototype.myReduce = function(callback,initValue){
    let acc=initValue
  this.forEach((ele)=>{
    acc=  callback(acc,ele)
    
  })
  return acc

}

let sumPolyfill = arr.myReduce((acc,val)=>{

    acc= acc+val
    return acc

},0)

console.log(sumPolyfill)

console.clear()
let users=[
    {firstName:"Anusha",secondName:"Motamarri",Age:26},
    {firstName:"Sudha",secondName:"Murthy",Age:70},
    {firstName:"Ratan ",secondName:"Tata",Age:80},
]
//return first names of people whose age is greater than 60
let firstNames = users.myReduce((names,curr)=>{
    curr.Age>60&&names.push(curr.firstName) // if curr.Age>60 then push the first name into names array
return names // do not forget to return the accumulator
},[])//initialize names to empty arr []
    
console.log(firstNames)
