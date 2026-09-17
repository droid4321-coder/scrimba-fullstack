// L14 literal types

//when we hover over the variable name, it tells us its a string TS has correctly infered. In this let variable, this happens
let myName: "Bob" = "Bob"

//however, when we hover over the variable in a const variable, it does not return implicit type, just the variable name and the string. This is called a literal type, and TS tells us that the variable is the value that is assigned to. Because it is a const, it cannot be reassigned, therefore the value must stay the same. We can assign a literal type in the type declaration.

//this is useful sometimes, and it is good when paired with unions
const myName2: "Bob" = "Bob"