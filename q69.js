//What is the purpose of double exclamation

/*
The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true. For example, you can test IE version using this expression as below,

*/

let isIE8 = false;
isIE8 = !! 0;
console.log(isIE8); // returns true or false


//If you don't use this expression then it returns the original value.