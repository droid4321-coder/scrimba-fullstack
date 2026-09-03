//import React from "react"

export default function Pad(props) {

    //initial state to toggle the state of each button
    //const [isOn, setIsOn] = React.useState(props.on)

    //toggles the state of the buttons
    /*function toggleOn() {
        setIsOn((prevValue) => !prevValue)
    } */


    //checks if on is true or false
    const onCheck = props.on ? "on" : undefined

    return (
        <button onClick={() => props.toggle(props.id)} className={onCheck} style={props.color} key={props.id}></button>
    )
}

/* in the last lesson we did it in local state, setting state based on initial value, derived state from the incoming props. You probably dont need derived state. The problem is, you can end with multiple states of truth. Then its out of sync with the parent component, certain features may break, like putting a button that says turn all buttons on, it would give problems

Its better to remove the state from the individual component, and make use of the state inside the app, create the toggle function, and update the local state of the component, its going to render all of them, passing the toggle function to each of them based on some id number. This is the best practice in React, to have a single source of truth

We are passing the function to every component. Because it is in the parent component, theres really only one toggle function, and accessing DOM nodes is not right, the JSX code cant have parentheses because it runs instantly. We dont get to choose what gets passed as the function.

To get around this, we can pass an anonymous arrow function to onClick that determines that the props.toggle is going to recieve the id, but we cant just get the ID from the button key ID. We can pass an id param on the Pad component call on the parent component, and we get the ID. 
*/