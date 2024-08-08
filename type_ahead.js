const allItems = [
    "I had a friend in high school named Rick Shaw, but he was fairly useless as a mode of transport.",
"The family’s excitement over going to Disneyland was crazier than she anticipated.",
"The Great Dane looked more like a horse than a dog.",
"The water flowing down the river didn’t look that powerful from the car",
"You can't compare apples and oranges, but what about bananas and plantains?",
"The stranger officiates the meal.",
"The father handed each child a roadmap at the beginning of the 2-day road trip and explained it was so they could find their way home."
,"He barked orders at his daughters but they just stared back with amusement.",
"They did nothing as the raccoon attacked the lady’s bag of food.",
"A quiet house is nice until you are ordered to stay in it for months."
]

const getSearchResults = (searchText)=>{
    const results = allItems.filter(val=>val.includes(searchText));
    console.log(results)
    return new Promise((resolve)=>resolve(results))
}
const debounce = (fn,delay) =>{
    let timer='';
    return function (){
       const self=this
       const args=arguments;
       clearTimeout(timer)
       timer = setTimeout(()=>fn.apply(self,args),delay)
    }
}
const optimizedGetSearchResults = debounce(getSearchResults,1000);
const onKeyPress = async ()=>{
    const value = document.getElementById("type-ahead-box").value;
    // const searchResults = await getSearchResults(value);
    console.log(optimizedGetSearchResults)
    const searchResults1 =  optimizedGetSearchResults(value);
    console.log(searchResults1)
    // let element = document.getElementById("search-results");
    // element.innerHTML=""
    // searchResults.forEach(item => {
    //     const childDiv = document.createElement("div");
    //     childDiv.setAttribute("classname","item-container")
    //     childDiv.appendChild(document.createTextNode(item));
    //     element.appendChild(childDiv)
    // });
    
    
}