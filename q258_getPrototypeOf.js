const newPrototype = {
    name:'Anusha',
    fun:function(){
        console.log("new fun")
    }

};
const newObject = Object.create(newPrototype,{
    xyz:{value:'xyz'}
});

console.log(Object.getPrototypeOf(newObject)==newObject.__proto__,Object.getPrototypeOf(newObject)==newPrototype ); // true