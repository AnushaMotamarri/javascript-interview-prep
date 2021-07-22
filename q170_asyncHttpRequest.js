//what is http request

//const response = fetch("https://api.github.com/users")

function httpGetAsync(theUrl, callback)
{
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function() { //this is like .then() when promises are used
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
            callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.open("GET", theUrl, true); // true for asynchronous
    xmlHttpReq.send(null);
}
httpGetAsync('https://api.github.com/users',(res)=>console.log(res))
console.log("this is first")

