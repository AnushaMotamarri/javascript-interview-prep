document.getElementById('category').addEventListener('click',(e)=>{
    console.log(e)
})
document.getElementById('category').addEventListener('keyup',(e)=>{
    if(e.target.dataset.sample !=undefined){
        e.target.value = e.target.value.toUpperCase();
    }
   
})


//thtis is possible only bcoz of event bubbling
//here we added listener only to parent bcoz event bubble happens and all the info of where the event happened is available in target