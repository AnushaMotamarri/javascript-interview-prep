//What is the difference between == and === operators

/*
== equality checks for value equality with coersion allowed 
=== equality checks for value equality with coersion not allowed (strict equality)

Truthy and Falsy values

**Falsy category**

"" , 0 , -0, NaN, null, undefined, false ===> all these can be coersed into boolean false
so using "==" between any two operators will result in True.
but using "===" wil; result in false if their types and values doesnt match as coersion is not allowed

**Truthy Category**

any value thats not in Falsy category comes under Truthy. 


**Inequality Operators**
There is no strict Inequality operators that disallow coersion the same way === does.



*/
let a='42',b=42,c=41

console.log(a==b, a===b,a>c)
