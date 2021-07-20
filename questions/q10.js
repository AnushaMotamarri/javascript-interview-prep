//What are lambda or arrow functions?
function sum(a,b){
    return a+b
}

let sum2 = (a,b)=> a+b //If there is only one statement , we dont need { } and return statement

var xyz = "outside"
const parent = {
    mom_name: "Samantha Quinn",
    motherRegular:function() {
        console.log( this);
      },
    mother: () => {
      console.log( this);
    },
  };

parent.motherRegular()
parent.mother()
