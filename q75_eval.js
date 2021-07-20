//What is eval

//The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements
function evaluate(exp){
    console.log(eval(exp))
    
}
evaluate('1+2')
function avoidHoisting(expression){
    
    eval(expression)
    console.log(a,b)
}

avoidHoisting('var a=2;var b=5')

//when you use strict, declarations made inside of eval() do not actually modify the enclosing scope


function useStrict(expression){
    "use strict"
    eval(expression)
    console.log(a,b) // reference error
}
useStrict('var a=2;var b=5')