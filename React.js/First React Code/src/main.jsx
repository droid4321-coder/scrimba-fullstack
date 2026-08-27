//import { createElement } from "react";
//import { createRoot } from "react-dom/client";

//// 1.create a root - we need to do this to have a place where we can tell React where to put the component in our HTML DOM
//const root = createRoot(document.getElementById("root"));
//
////createElement
////const reactElement = createElement("h1", null, "Hello from createElement!");
//const reactElement = <h1>Hello From JSX!</h1> // written with JSX, which is built on top of createElement
//
//console.log(reactElement);
//// 2. render some markup in the root
//root.render(
//    //in vite this works -> <img src="./assets/react.svg" /> but, a relative path might not work correctly, making it an absolute path is better. There is a better way to handle images.
//    reactElement
//)

/* Before, React did not code HTML like we see on root.render.
   Instead, it imported a createElement function
   This element takes 3 parameters, 1. the element you want to create, 2. Props, we see that later, 3 What children we want it to have
   This is more verbose code and was implemented in the early days of react.

   Using create Element is not a good exprience, especially nesting elements. inside one another.
   Thats why JSX was invented, to write something familiar with HTML
*/

/* We are here from lesson 7 of section 2 JS inside JSX 
    JSX is used to reprensent JS and render it to webpage, but one thing it might be done is using a variable to display some data
    We are going to see how to put JS code inside a JSX component
*/

import ReactDOM from "react-dom/client"

function App() {

    //we assign variables like in JS
    const firstName = "Joe";
    const lastName = "Schmoe";

    const hours = new Date().getHours();

    let timeOfDay;
    let meridian;

    if (hours < 12) {
        timeOfDay = "morning";
        meridian = "AM";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        meridian = "PM";
    } else if (hours < 21) {
        timeOfDay = "evening";
        meridian = "PM";
    } else {
        timeOfDay = "night";
        meridian = "PM";
    }

    //if we try to use it like in JS, it will return the text only and not the expected result, theefore we need to put it in curly brackets so it interprets it like JS code inside of JSX.
    //When React is transpiled, when it reads a tag is interpeted as JSX code, but when it runs into a opening curly brace, it interprets it like regular JS. Everythime there is a closing curly brece it goes back into JSX and JS so on so forth. We can run any JS code in the curly braces
    //its not recommended to put logic inside JSX, better to put it in a variable

    return (
        //<h1>{ `Hello ${firstName} ${lastName}` }</h1>
        <>
            <h1>It is currently {`${hours % 12} ${meridian}`}</h1>
            <h2>Good {timeOfDay} { firstName} { lastName }</h2>
        </>

    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
