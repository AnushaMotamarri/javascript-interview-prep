//clear timeout

let timeout = setTimeout(() => {
    console.log("Timeout Finished!")
}, 3000);

setTimeout(()=>{
    console.log("cleared timeout")
    clearTimeout(timeout)
},2000)