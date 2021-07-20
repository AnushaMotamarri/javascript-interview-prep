//What is a callback hell
/*
Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,
*/

function callFunc(f){
    f();
}


callFunc( function() {
    callFunc(function() {
     callFunc( function() {
         console.log('last script is loaded');
       // after all scripts are loaded
     });
 
   })
 
 });