//significance of return False


document.getElementById("grandparent1").addEventListener('click',function(){
    alert("called grand parent")
})
document.getElementById("parent1").addEventListener('click',function(){
    alert("called  parent")
    
})
document.getElementById("child1").addEventListener('click',function(e){

    alert("called child")
    return false; //should stop both propagation as well as prevents default behaviour
})