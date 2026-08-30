import React from "react"

export default function Ternary() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const [isGoingOut, setIsGoingOut] = React.useState(false)

    //this function flips true to false and viceversa
    function handleClick() {
        setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
    }

    //another alternative for onClick = {() => {setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)}}
    
    //let answer =  // 👈 Use ternary here
    
    // Remove the code below 👇 once your ternary is done
    /*if(isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    } */
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button onClick={handleClick} className="value" aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change.`}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}