import React from "react"
import padsData from "./pads.js"

export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */

    //state variable for pads array
    const [pads, setPads] = React.useState(padsData)

    //state variable for darkmode prop declared in the App component bracket
    const [darkMode, setDarkMode] = React.useState(props.darkMode)

    const darkModeCheck = darkMode ? {backgroundColor : "#222222"} : {backgroundColor : "#CCCCCC"}

    //if in HTML we do document.getElementById("something").style.backgroundColor = "black" <- its in camelCase due to JS convention


    //this toggles the value
    function darkModeToggle() {
        setDarkMode((prevValue) => {
            return !prevValue
        })
    }

    //mapping buttons to make them appear
    const buttonElements = pads.map((pad) => {
        return (
            <button style={darkModeCheck} key={pad.id}></button>
        )
    })

    //console.log(pads); pads is an array of objects so need to map the item using dot notation, we do this using the key atribute with the id

    /* inline styles in react 
    We can render inline styles like internal styles in HTML, just a bit different due to being JSX.
    */
    return (
        <main>
            <button onClick={darkModeToggle}>{darkMode ? "Set Light Mode" : "Set Dark Mode"}</button>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
