//weaksets


let weakset=new WeakSet([{firstname:'anusha',lastname:'motamarri'}])

//add elements to weakset:

weakset.add({firstname:'Monika',lastname:'Nimmu'})
console.log(weakset.has({firstname:'anusha',lastname:'motamarri'})) // this will output false because the one whih is existing and the object we have passed now do not refer to same object


let obj1={firstname:'amulya',lastname:'rangaraju'}
weakset.add(obj1)
console.log(weakset.has(obj1)) //this will be true because both refer to same object
obj1.firstname="amulya_changed"
console.log(weakset) // changing obj1 modifies the weakset object as well
weakset.delete(obj1)
console.log(weakset) 
let obj2={firstname:'amulya',lastname:'rangaraju'}

weakset.add(obj2)
obj2=null
console.log(weakset) //this should clear obj2 from weakset as well, this may not get reflected immediately as garbage collectormay not immediately delete entries

