import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {

        //function to set the current width after resize
        function watchWindowWidth() {
            console.log("Resized");
            setWindowWidth(window.innerWidth)
        }

        //event listener for the function above
        window.addEventListener("resize", watchWindowWidth)

        //this is a cleanup function to remove the event listener when not needed, toggle is false it decativates.
        return function () {
            console.log("Cleaned!");
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}

//There is a bug even if the app is working normally, the console log gives us a hint. When its toggled off, the component still keeps logging to the console when resized, and when we keep toggling the console logs keep piling up.

//The window function is outside of React, and because it is out of the control there is no way that it knows to stop listening for any resize events. When it remounts it adds another eventlistener. That is why it is important to cleanup the functions we do and discconect it. We are not returning a function in the callback function.

//For that, we can return a function to unmount and cleanup the component and event.