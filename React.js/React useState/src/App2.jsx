import React from "react"
import Count from "./Count.jsx"

export default function App2() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

    const [count, setCount] = React.useState(0)


    //now lets update state with a callback function, this function passes the oldValue before it is ran and rendered, therefore we can use a temporary value as a parameter

    //important note - If you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function will receive the old value as its parameter, which you can then use to determine your new value of state.

    /*
        an example of this - lets say we have the following functions

            function add() {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
}
            function subtract() {
                setCount(count - 1)
                setCount(count - 1)
            }
            
            The add function will add 3 times because it uses the previous count. But the subtract will only do 1 because it does not take account the previous value.
    */

    //you might have tried to do count++, but it does not work alwsys because of funky behavior.
    //never change the value directly in state variable. When we do it the way shown, it adds the value to the state variable
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }


    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("App rendered!");


    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={subtract} className="minus" aria-label="Decrease count">–</button>
                <Count number={count} />
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}

/* Passing state as props 

    We have a count.jsx file that is returning a component with a number as a prop, we now pass this to this function with the count as the number to display in the function.

    When something is rendered, we can think if it like the function of that app being run. Run thru the app code for example and then runs it and some JSX that turn to DOM elements, in order, first the App render and then the Count rendered, React ran the count function.

    When we changed the state of the variable is rerunning both functions. Why Count rerenders when the App component has the state variable? Every component inside of our App component gets re-rendered regardless of if its updated, if we have a state change, it will rerender all parent component with the state variable
    
*/