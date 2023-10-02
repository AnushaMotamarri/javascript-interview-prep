
function callApi(){
    const str = document.getElementsByClassName("debounceInput")[0].value;
    console.log("API called",str);
    
}
function debounceApi(fn,delay){
    let timeout;
    return function(){
        clearTimeout(timeout);
        timeout= setTimeout(() => {
            fn();
        }, delay);
    }
   
    
}
const onKeyUpEvent = debounceApi(callApi,300);
