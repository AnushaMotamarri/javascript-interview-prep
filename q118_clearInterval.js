
/* clear interval*/
let count=0
let interval= setInterval(function(){ 
    console.log(++count);
 }, 1000);
setTimeout(()=>{
    console.log("clearing interval")
    clearInterval(interval)
},5000)
