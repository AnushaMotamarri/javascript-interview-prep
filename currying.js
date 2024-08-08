
function sum(...args){
   let parentSum = args.reduce((acc,val)=>acc=acc+val,0);
    return function(...args2){
        if(!args2.length){
            return parentSum
        }
        let childSum = args2?.reduce((acc,val)=>acc=acc+val,0);
       
        return sum(parentSum+childSum)
    }
}

console.log(sum(1,2,3)(1)(1,2)())