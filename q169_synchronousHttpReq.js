function httpGetAsync(theUrl)
{
    
    var xmlHttpReq = new XMLHttpRequest();
    
    xmlHttpReq.open("GET", theUrl, false); // false for synchronous,
    console.log("sending req")
    xmlHttpReq.send(null);
    console.log("this is first")
    return xmlHttpReq.responseText
}
let result = httpGetAsync('https://api.github.com/users')
console.log("executed only after response",result[0])