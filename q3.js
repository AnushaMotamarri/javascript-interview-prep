/* Differece between Call, Apply, Bind methods */

let name = {
firstName:"Anusha",
lastName:"Motamarri"
}
let name2={
    firstName:"Sudha",
    lastName:"Murty"
}

let printFullName = function(hometown,state){
    console.log(this.firstName+" "+this.lastName+" from "+hometown+", "+state)
}
printFullName.call(name,"hyderabad","TG")
printFullName.apply(name2,["Hubli","Karnataka"])

let callPrintNameLater = printFullName.bind(name,"Hyd","TG")

//after 1000 lines of code

callPrintNameLater()


//the difference btw call and apply is in the way arguments are passed
//difference btw (call, apply) and bind is that, bind returns a function, and it can be called later in the code
