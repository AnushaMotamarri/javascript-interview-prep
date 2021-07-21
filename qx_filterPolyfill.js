let arr = [1,2,3,4,5]
function isOdd(x){
    return x%2 ===0
}
let result = arr.filter(isOdd)
console.log(result)

Array.prototype.myFilter = function(callback){
    let output=[]
    this.forEach((ele)=>{
        callback(ele)&&output.push(ele)
    })
    return output
}

let myfilterres = arr.myFilter(isOdd)
console.log(myfilterres)

let users=[
    {firstName:"Anusha",secondName:"Motamarri",Age:26},
    {firstName:"Sudha",secondName:"Murthy",Age:70},
    {firstName:"Ratan ",secondName:"Tata",Age:80},
]

let fullName = users.map((x)=>{
return x.firstName+x.secondName
})
console.log(fullName)