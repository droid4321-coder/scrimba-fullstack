import React, { useState } from "react";

export default function App1() {
    
    //result is no longer an array because of destructuring, so we can call any of the 2 variables without needing to put the index. We can call the first valur whatever name.

    //even if we save a state variable and change it, it will change but not render.

    //the function on index 1 if we provide a new value, it will re-render the page and update the value
    //the convention for this function is set-name of first variable and then modify it 

    const [isImportant, setIsImportant] = React.useState("Yes")
    //setIsImportant("Heck yes") //even though it will re-render, but it falls on an infinite loop and React does not allow it.

    //to allow it to function, we do a function and then put a handler on the desired element(the button in this case)
    //this function prevents the infinite loop and makes it re-render when the button is pressed, but, in this moment, the user cannot get out of the new state
    function handleClick() {
        setIsImportant("Definitely")
    }

    console.log(isImportant); // useState clogs an array with an empty string, but by putting a string, it returns that string.
    //In other words, when a value is passed in the useState, it returns it as an initial value

    //let state = "Yes" //with this variable we can define the text we see in the button

    /*function handleClick() {
        state = "Heck yes"
    } */

    //the issue arises when we try to modify it inside the return of the React component. Even if we click the button, there will be no update because a local variable React will not re-render as seen on the error.

    //to do this, we need to use the useState function, importing it like import {useState} from "react";
    //or, like we will do in this example, importing the whole React library and using React.useState
    //this way we can use the value provided in the variable where we want using JSX, like in the button component. This in turn makes it a state variable instead of a local variable. This is not something the user can do and is clunky, we will see how to add interactivity

    /*  useState array destructuring

        When we call useState we are receiving an array in return, its clunky to return an index, so we use array destructuring

    */

    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}