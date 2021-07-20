//what is function currying in javascript?

/*
Currying is the process of taking a function with multiple arguments and 
turning it into a sequence of functions each with only a single argument.
*/

/* Interview question */

//find sum(1)(2)(3)...(n)() -> use currying concept

function sum(a){
    return function inner(b){
        return b?sum(a+b):a
    }
}
console.log(sum(1)(2)(3)(4)())

