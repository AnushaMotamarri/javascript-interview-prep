//What is promise chaining?

/*
The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,
*/

let res  = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result); // 1
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); // 2
    return result * 3;
  
  }).then(function(result) {
  
    console.log(result); // 6
    return result * 4;
  
  });
res.then((d)=>console.log(d))
  console.log(res)