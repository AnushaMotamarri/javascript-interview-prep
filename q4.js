// what is JSON and its common properties


let obj ={
    firstname:"anusha",
    lastname:"Motamarri"
}

let strObj = JSON.stringify(obj)
let parseObj = JSON.parse(strObj)
console.log(strObj,parseObj)