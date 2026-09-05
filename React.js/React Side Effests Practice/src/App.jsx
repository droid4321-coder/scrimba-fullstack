import React from "react"

export default function App(props) {

    //this fetches from the Star Wars API. gets the char number 1, Luke SkyWalker. then gets the data, receives it into a JSON, and then log it to the console. It works as seen on the console.log. Now, it will pass the data to the setter function.
    
    //But there is a problem. Any code is going to run everytime React rerenders the state variable, there is an infinite loop that runs the fetch request infinitely

    //Why are we in an infinite loop? Because as the AI says lol, React runs from top to bottom, and when there is a re-render on the state variable, it will run again and again and again. It starts the fetch requst, returns because it takes time, the response comes, and sets it again.

    //to avoid this, have a fetch requet only do one time, we need to use side effects

    //console.log("Rendered!");

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => {
            setStarWarsData(data)
        })
    
    const [starWarsData, setStarWarsData] = React.useState(null)

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
            <pre>{JSON.stringify({starWarsData}, null, 2)}</pre>
        </div>
    )
}