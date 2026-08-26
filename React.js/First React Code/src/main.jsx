//import { createElement } from "react";
import { createRoot } from "react-dom/client";

// 1.create a root - we need to do this to have a place where we can tell React where to put the component in our HTML DOM
const root = createRoot(document.getElementById("root"));

//createElement
//const reactElement = createElement("h1", null, "Hello from createElement!");
const reactElement = <h1>Hello From JSX!</h1> // written with JSX, which is built on top of createElement

console.log(reactElement);
// 2. render some markup in the root
root.render(
    reactElement
)

/* Before, React did not code HTML like we see on root.render.
   Instead, it imported a createElement function
   This element takes 3 parameters, 1. the element you want to create, 2. Props, we see that later, 3 What children we want it to have
   This is more verbose code and was implemented in the early days of react.

   Using create Element is not a good exprience, especially nesting elements. inside one another.
   Thats why JSX was invented, to write something familiar with HTML
*/

