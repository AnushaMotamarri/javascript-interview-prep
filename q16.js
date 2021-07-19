//what are pure functions in JS?
/*
A Pure function is a function where the return value is only determined by its arguments without any side effects(without modifyinf anything outside of the function).
 i.e, If you call a function with the same arguments 'n' number of times and 
 'n' number of places in the application then it will always return the same value.
 */

 const array = [1,2,3,4]

 function impureFunction(ele){
     array.push(ele)
     console.log(array)
 }
 //impureFunction(5) //modifies array variable which is outside the function
 //impureFunction(6) 
 //each time function is executed the value of array variable is changing. so "impureFunction" is not a pure function


 function pureFunction(a,element){
     return [...a,element]
 }
 console.log(pureFunction(array,5), array) 
 console.log(pureFunction(array,5), array) 
 /*
 pureFunction(array,5) always returns same value and it does not modify anything outside of it.
 so its a pure function
 */
 function impureFunction1(a,element){
    return [...a,element,Math.random()]
}
console.log(impureFunction1(array,5), array) 
console.log(impureFunction1(array,5), array) 
/* output changes everytime function is called with same args. so its impure function*/
