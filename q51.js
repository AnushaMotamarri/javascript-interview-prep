//what is a promise?

//normal function
function fun(){
    return 1
}

console.log(fun()) // returns 1

//function using async

async function funAsync(){
  return 1
}

console.log(funAsync()) //returns something called promise

/*
promise contains two properties 
1. Promise Status -> resolved/rejected/pending
2. Promise Value -> value returned by the function
*/

console.clear()

// function using async await
async function funAsyncAwait(){
    //console.time()
    const response = fetch("https://api.github.com/users")
    console.log(response) //fetch function returns a promise and it takes sometime to fetch data from url
    //for now response returns a promise in pending state
    
    response.then((d)=>{ //this will get executed only when response is in resolved state/rejected state
        //console.log(d)
        //console.timeEnd() // then go called after  142 ms approx, which means fetching took 142 ms
    })

    console.log("end of fun",response) //this will get executed irrespective of response being resolved or not,response is still in pending state.
    
}
funAsyncAwait()

console.clear()
//what if we want to stop further lines inside the function from executing until fetch is resolved?

//one way is to use await function
async function funAsyncAwait1(){
    console.log("at the start of funAsyncAwait1")
    const response =await fetch("https://api.github.com/users") //the control sees await and goes back to the caller
    //now the above line does not return promise but it returns the response from fetch() itself
    const formatted = await response.json() //this line gets executed only when fetch returns something.
    //if you dont want to use await, then directly use response.json() it returns a promise. now later get the value using .then()
    //console.log("end of fun",formatted) //this will get executed  only after response.json() returns something
    return formatted
}
let result =funAsyncAwait1()
console.log("i am called even before completion of funAsyncAwait1 execution",result) 
//this gets called even before funAsyncAwait1 returns some value., and result will have a promise.


let result1 =  funAsyncAwait1()
//result1.then((result)=>console.log("i wait until fun call is complete",result)) 



/*

RULES OF ASYNC AWAIT

1. Await can be called only in the async function
2. every async function returns a promise
3. the promise can be in 3 states resolved,rejected, and pending
4. if you want some lines to be executed only after promise is resolved, there are two ways u can do it
    i. using .then() -> if you want to use .then() you need not use await keyword. the lines inside .then() will get executed only when promise is resolved
    ii. using await -> if you use await, then all the lines below await will get executed only when the result is resolved. 
    on seeing the keyword await, the control returns back to wherever the function was called, and control comes back when await is resolved.

*/


console.clear()

async function test(){
    function funPromise(){
        return new Promise(function (resolve,reject){
            setTimeout(function(){
                resolve("resolved promise")
            },3000)
        })
    }
    let res = await funPromise()
    console.log(res) //will get executed only after 3000 ms 
}
test()

function funPromise(){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            resolve("resolved promise")
        },3000)
    })
}
let res = funPromise()
console.log(res) //will get executed before funPromise() returns
res.then((data)=>console.log(data)) //will get executed only after promise is resolved
