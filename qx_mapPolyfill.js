let arr = [1,2,3,4,5]

function double(x){
    return x*2
}

function binary(x){
    return x.toString(2)
}
let result = arr.map(double)


Array.prototype.myMap = function(callback){
 let output = []
 this.forEach(ele=>{
     output.push(callback(ele))
 })
 return output
}

let resPolyfill = arr.myMap(binary)
console.log(resPolyfill)