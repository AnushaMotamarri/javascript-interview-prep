/*

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
Remember that JavaScript only hoists declarations, not initialisation. 
Let's take a simple example of variable hoisting,
*/

console.log(message); //output : undefined
var message = 'The variable Has been hoisted';

//The above code looks like as below to the interpretr


// Functions are hoisted before variables

console.log(a);// will output the function a(){} but not variable a, as functions are hoisted first
var a;
a = 'The variable Has been hoisted';

function a(){
    console.log("in fun")
}

