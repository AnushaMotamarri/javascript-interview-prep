/*The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.*/

document.getElementById('prevent_default').addEventListener('click',function(e){
   alert("clicked")
e.preventDefault() //prevent any browsers default action from happening. in this case,clicking on anchor tag wont redirect 
})

