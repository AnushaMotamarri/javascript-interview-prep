document.getElementById('grandparent').addEventListener('click',(e)=>{
   console.log("grand parent event called")
})
document.getElementById('parent').addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("parent event called")
})
document.getElementById('child').addEventListener('click',(e)=>{
    console.log("child event called")
})