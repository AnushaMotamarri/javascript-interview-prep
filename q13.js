//What is a higher order function

/*Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.*/

const firstOrderFunc = () => console.log ('Hello, I am a First order function');
const higherOrder = fun => fun(); //this takes fun as argument and returns fun, so this is higher order function
higherOrder(firstOrderFunc);
