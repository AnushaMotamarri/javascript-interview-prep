

function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // counter2 accessed before initialization
    var counter1 = 1;
    let counter2 = 2;
  }