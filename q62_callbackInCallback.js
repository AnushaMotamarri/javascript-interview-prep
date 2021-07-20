/*
You can nest one callback inside in another callback to execute the actions sequentially one by one. This is known as callbacks in callbacks.
*/
function callFunc(number,f){
    console.log(number)
    f();
}


callFunc('calling first', function() {
    console.log('first script is loaded');
 
    callFunc('calling second', function() {
 
     console.log('second script is loaded');
 
     callFunc('calling third', function() {
 
         console.log('third script is loaded');
       // after all scripts are loaded
     });
 
   })
 
 });