//How do you check whether a string contains a substring

//Using includes: ES6 provided String.prototype.includes method to test a string contains a substring
var mainString = "hello", subString = "hell";
mainString.includes(subString)

//Using indexOf:

var mainString = "hello", subString = "hell";
mainString.indexOf(subString) !== -1

//Using RegEx: 

var mainString = "hello", regex = /hell/;
regex.test(mainString)