//What is the use of setInterval

/*
The setInterval() method is used to call a function or evaluate an expression at specified intervals (in milliseconds). For example, let's log a message after 2 seconds using setInterval method,
*/
let count=0
let interval= setInterval(function(){ 
    console.log(++count);
 }, 1000);



 