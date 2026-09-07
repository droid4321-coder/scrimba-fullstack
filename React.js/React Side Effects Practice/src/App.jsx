import React from "react"

export default function App(props) {

    //this fetches from the Star Wars API. gets the char number 1, Luke SkyWalker. then gets the data, receives it into a JSON, and then log it to the console. It works as seen on the console.log. Now, it will pass the data to the setter function.
    
    //But there is a problem. Any code is going to run everytime React rerenders the state variable, there is an infinite loop that runs the fetch request infinitely

    //Why are we in an infinite loop? Because as the AI says lol, React runs from top to bottom, and when there is a re-render on the state variable, it will run again and again and again. It starts the fetch requst, returns because it takes time, the response comes, and sets it again.

    //if the value is hardcoded, like 0, it rerendered but the useEffect did not run this time, because the array contain the same value, no need to run the function

    //to avoid this, have a fetch requet only do one time, we need to use side effects

    console.log("Rendered!");

    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => {
    //         setStarWarsData(data)
    //     })

    //fix this with useEffect. In this code in the callback function, we put a side effect outside of the React ecosystem, in the case of a fetch request, this is appropiate to put inside the useeffect. Even though this code is put here, there is still an infinite loop.

    //Remember that React will run this useEffect after the return is renderen inside the virtual DOM in React.

    //fist param is the setup which is a callback function, then an optional dependencies array that we can make it so that when useEffect runs, it stops running again. We always want to add the dependency array. This array will have values that React will watch between each 2 renders. If any of the values change, then React knows that it will need to run the function again.
    
    //When we add the count variable in the function, we can see that everytime the count changes, the render will happen again, not an infinite loop.

    //by adding count to the useEffect, there is no more infinte loop. Because the count does not change, we are no longer making another fetch request, when the button is clicked, it changes the count value, the dependcy array count changes, and the effect runs again.

    //empty array basically means do the action once and thats it.
    //"https://swapi.dev/api/people/1" -> Star Wars API URL

    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(1)

    //basically now ny making the URL like this, we can sort thru the characters. Yeah!!!!


    React.useEffect(() => {

        let starWarsURL = `https://swapi.dev/api/people/${count}`
        //console.log("Effect Ran");
        fetch(starWarsURL)
        .then(res => res.json())
        .then(data => {setStarWarsData(data)})
    }, [count])

    // function Add() {
    //     setStarWarsData((prevCount) => {
    //         prevCount = prevCount + 1
    //     })
    // }

    function getNewCharacter() {
        setCount((prevCount) => {
            return prevCount + 1
        })
    }
    //<pre>{JSON.stringify({ name : "Luke" }, null, 2)}</pre> is hardcoded data



    /* info = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
} */

    return (
        <div className="container">
            <h2>The count is {count}</h2>
            <p>Current URL: {starWarsURL}</p>
            <button onClick={getNewCharacter}>Get next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}