export default function Joke({setup, punchline}) {
    return (
        <>
            {setup && <h3>Setup: {setup}</h3>}
            {punchline && <p>Punchline: {punchline}</p>}
        </>
    )
}

//by doing the {setup && component} we tell React to render the element of the prop is declared, conditional rendering
//other method = <p style={{display: props.punchline ? "block" : "none"}}>Punchline: {props.punchline}</p> using ternary operator to display if present.