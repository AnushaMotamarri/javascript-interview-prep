//what are closures

/*
A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). 
*/

function outer(){
    let a =2
    function inner1(){
        a+=1
    }
    function inner2(){ // inner2's closure contains REFERENCE to a, and inner1
        inner1()
        console.log(a)
    }
    inner1()
    inner1()
    return inner2
}
let outerfun = outer()
outerfun() // outputs 5.