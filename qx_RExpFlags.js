//sticky flag or y flag


let re1=/foo/ 
let str="++foo++foo"

console.log(re1.lastIndex,re1.test(str))

// if we wat the search to be made from certain position give some value to last index and change the modifier to 'y'
//lastIndex specifies where the search should be made, if 'y' modifier is not present, test() wont look at lastIndex

re1=/ff/y 
re1.lastIndex = 2
console.log(re1.test(str))
console.log(re1.lastIndex)//last index points to the character immediately followig the match, if match fails, test() resets lastIndex to 0

// when y flag is used, the search wont move ahead





