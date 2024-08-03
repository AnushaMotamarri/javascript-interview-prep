// 1. Regular Function

// The this keyword behaves differently in arrow functions compared to regular functions in JavaScript. 
// Arrow functions do not have their own this context; instead, 
// they inherit this from the parent scope at the time they are defined. Regular functions, 
// on the other hand, have their own this context, which is determined by how they are called.
const obj = {
    name: 'Alice',
    regularFunction: function() {
      console.log('Regular Function:', this.name);
    }
  };
  
obj.regularFunction(); // Output: "Regular Function: Alice"
// In this example, this inside regularFunction refers to obj, because regularFunction is called as a method of obj.



//2. Arrow Function
const name="anusha"
const obj1 = {
    name: 'Alice',
    arrowFunction: ()=> {
      console.log('Arrow Function:', this.name); //returns undefined since "this" object is inherited from parent which is global scope
      //and in the global scope there is no "name"
    }
  };
  
obj1.arrowFunction(); 
// Example 3: Arrow Function Inside a Regular Function
const obj2 = {
  name: 'Alice',
  regularFunction: function() {
    const arrowFunction = () => {
      console.log('Arrow Function inside Regular Function:', this.name);
    };
    arrowFunction();
  }
};

obj2.regularFunction(); // Output: "Arrow Function inside Regular Function: Alice"
// Here, this inside arrowFunction refers to this of regularFunction, which is obj. The arrow function inherits this from its surrounding scope where it was defined, which is the regularFunction.
// Example 4: Regular Function Inside a Regular Function
const obj4 = {
    name: 'Alice',
    regularFunction: function() {
      const nestedRegularFunction = function() {
        console.log('Nested Regular Function:', this.name);
      };
      nestedRegularFunction();
    }
  };
  
  obj4.regularFunction(); // Output: "Nested Regular Function: undefined" (or an error in strict mode)

//   In this example, this inside nestedRegularFunction is not obj, but rather the global this (or undefined in strict mode), because nestedRegularFunction is called as a regular function, not as a method of obj.
  