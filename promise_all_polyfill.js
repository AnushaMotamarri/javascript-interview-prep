const dummyAPI = (delay,id)=> new Promise((res,rej)=>setTimeout(()=>id==1?res("resolved"+id):rej("rejected"+id),delay))

const promisesArray = [dummyAPI(2000,1),dummyAPI(1000,2),dummyAPI(3000,3)];
Function.prototype.myAll = function(promisesArray){
    let resultsArray=[];
    let count=0;
    return new Promise((res,rej)=>{
        promisesArray.forEach((promise,idx) => {
            promise.then((data)=>{
                count+=1;
                resultsArray[idx] = data;
                if(count===promisesArray.length){
                    res(resultsArray)
                }
            }).catch((err)=>rej(err))
        });
    })
}

Function.prototype.myRace = function(promisesArray){
    return new Promise((res,rej)=>{
        promisesArray.forEach((promise) => {
            promise.then((data)=>{
                res(data)
            }).catch((err)=>rej(err))
        });
    })
}

Function.prototype.myAllSettled = function(promisesArray){
    let resultsArray=[];
    let count=0;
    return new Promise((res,rej)=>{
        promisesArray.forEach((promise,idx) => {
            promise.then((data)=>{
                count+=1;
                resultsArray[idx] = {
                    status:"fulfilled",
                    value:data

                };
                if(count===promisesArray.length){
                    res(resultsArray)
                }
            }).catch((err)=>{
                count+=1;
                resultsArray[idx] = {
                    status:"rejected",
                    reason:err

                };
                if(count===promisesArray.length){
                    res(resultsArray)
                }
            })
        });
    })
}

Function.prototype.myAny = function(promisesArray){
    return new Promise((resolve)=>{
        promisesArray.forEach((promise,idx)=>{
            promise.then((data)=>resolve(data)).catch(err=>{})
        })
    })
}
// console.time("all");
// Promise.all(promisesArray).then((data)=>{console.log(data);console.timeEnd("all")}).catch((err)=>console.log(err))
// console.time("myAll");
// Promise.myAll(promisesArray).then((data)=>{console.log(data);console.timeEnd("myAll")}).catch((err)=>console.log(err))

// console.time("race");
// Promise.race(promisesArray).then((data)=>{console.log(data);console.timeEnd("race")}).catch((err)=>console.log(err))

// console.time("myRace");
// Promise.myRace(promisesArray).then((data)=>{console.log(data);console.timeEnd("myRace")}).catch((err)=>console.log(err))

// console.time("allSettled");
// Promise.allSettled(promisesArray).then((data)=>{console.log(data);console.timeEnd("allSettled")}).catch((err)=>console.log(err))

// console.time("myallSettled");
// Promise.myAllSettled(promisesArray).then((data)=>{console.log(data);console.timeEnd("myallSettled")}).catch((err)=>console.log(err))

console.time("any");
Promise.any(promisesArray).then((data)=>{console.log(data);console.timeEnd("any")}).catch((err)=>console.log(err))

console.time("myAny");
Promise.myAny(promisesArray).then((data)=>{console.log(data);console.timeEnd("myAny")}).catch((err)=>console.log(err))

