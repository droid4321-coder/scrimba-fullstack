import { useState } from "react";
import WindowTracker from "./WindowTracker.jsx";

export default function App2() {

    const [show, setShow] = useState(true);

    function toggleShow() {
        setShow(prevValue => !prevValue)
    }

    return (
        <main className="container">
            <button onClick={toggleShow}>Toggle WindowTracker</button>
            {show && <WindowTracker />}
        </main>
    )
}

//the windowtracker shows the innerwidth of the window. and when we toggle it on or off, it changes, but not dynamically because depending on state it gets added or removed from the document, We want to do that dynamically by event resize. To add it, use need some DOM manipulation, and since it is outside of React, useEffect is the best way to do it. Window,innerwidth is a static value, and it does not tell React to re-render. We do the useEffect function to manipulate the DOM to add an event listener.