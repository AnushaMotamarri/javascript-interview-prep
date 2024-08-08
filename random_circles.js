let count = 0;
let prevRadius = -1;
let prevX = -1,prevY = -1;
function findIfIntersecting(currentRadius,currX,currY){
    const minimumDistance = (prevRadius/2)+(currentRadius/2);
    const actualDistance = Math.sqrt(Math.pow(prevX-currX,2) + Math.pow(prevY-currY,2));
    console.log({minimumDistance,actualDistance,prevRadius,currentRadius,prevX,prevY,currX,currY})

    if(actualDistance<minimumDistance){
        console.log("intersecting")
    }
    else{
        console.log("not intersecting")
    }
}
function generateRandomCircle(circleDiv,x,y){
    const randomRadius = Math.floor(Math.random()*200);
    if(count === 1){
        prevRadius = randomRadius;
        prevX = x;
        prevY = y;
    }
    circleDiv.style.position="absolute";
    circleDiv.style.top = `${y}px`
    circleDiv.style.left = `${x}px`
    circleDiv.style.transform = "translate(-50%,-50%)"
    circleDiv.style.width=`${randomRadius}px`;
    circleDiv.style.height=`${randomRadius}px`;
    circleDiv.style.borderRadius="50%";
    circleDiv.style.border="1px solid";
    if(count==2){
        findIfIntersecting(randomRadius,x,y)
    }
}
function clearCircles(){
    document.getElementById("page-container").innerHTML = "";
    count = 0;
    prevX=-1;
    prevY=-1;

}
function createCircle(x,y){
    const circleDiv=document.createElement("div");
    circleDiv.setAttribute("id","newCircle");
    
    if(count===2){
        clearCircles();
        
    }
    
    count+=1;
    generateRandomCircle(circleDiv,x,y);

    document.getElementById("page-container").appendChild(circleDiv);
}

document.addEventListener("click",e=>{
    console.log({clientX:e.clientX,clientY:e.clientY})
    createCircle(e.clientX,e.clientY)
})