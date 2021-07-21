//How do you validate an email in javascript
/*
You can validate an email in javascript using regular expressions. It is recommended to do validations on the server side instead of the client side. Because the javascript can be disabled on the client side.
*/


let reg = /anu/ //this is regular expression literal, search stops after finding first result
// reg = /anu/g //searches entire string, search starts from previous search value
// reg=/anu/i //case insensitive search, stopsafter finding first result
// reg=/anu/ig //case insensitive+global

console.log(reg,reg.source)

//functions to match RE

let s="I am Anusha and i am called anu"

// 1.exec() this returns an array for match and null if there is no match
//***NOTE****
//if /g is given , executing exec() for the first time returns first match , executing exec() for second time gives second match etc
console.log(reg.exec(s))
console.log(reg.exec(s))


//2. test() - returns true or false

console.log(reg.test(s)) //prints true if reg is present in s

//3. match() -> returns array of results or null

console.log(s.match(reg))
let regGlobal = /anu/ig

console.log(s.match(regGlobal)) //prints array with all the results

//4. search() -> returns index of first match or -1

console.log(s.search(reg))

//5. replace() -> replace string with all the replacements
//if no global flag is given, first match will be replaced, else all will be replaced 

console.log(s.replace(reg,'Anus'))
console.clear()
let regExp = /^x.*z/
let matchexp = 'i am xyz'
console.log(regExp.exec(matchexp))

