import { useState } from "react"
import clsx from "clsx"
import { languages } from "./../src/languages.js"

export default function Main() {

    const [currentWord, setCurrentWord] = useState("react")

    const [guessedLetters, setGuessedLetters] = useState([])

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    const langElements = languages.map((item) => {
        return (
            <span key={item.name} style={{
                backgroundColor: item.backgroundColor,
                color: item.color,
            }} className="chip">{item.name}</span>
        )
    })

    const letterElements = currentWord.split("").map((letter, index) => {
        return <span
            key={index}
            className={clsx("word", {
                "flip-in-hor-bottom": guessedLetters.includes(letter)
            })}
        >
            {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
        </span>
    })

    //what would be the best way to store the guessed letters? I think that, in the map function, create an empty guessed array and push the element.id into it, since the letter is the id! And, since we want to get it everytime the user clicks a key, we want it to be saved in a state variable

    // also we can make a set, that it dont allow for dupes, const lettersSet = new Set(prevState); lettersSet.add(pressedLetter); return Array.from(lettersSet). Interesting!
    function addGuessedLetter(pressedLetter) {
        setGuessedLetters(prevState =>
            prevState.includes(pressedLetter) ?
                prevState :
                [...prevState, pressedLetter]
        )

    }

    const keyboardElements = alphabet.split("").map((letter) => {
        return <button
            key={letter}
            className={clsx("keyboard-letter",
                {
                    "right": guessedLetters.includes(letter.toLowerCase()) && currentWord.includes(letter.toLowerCase()),
                    "wrong": guessedLetters.includes(letter.toLowerCase()) && !currentWord.includes(letter.toLowerCase())
                }
            )
        }
            onClick={() => addGuessedLetter(letter.toLowerCase())}
        >
            {letter.toUpperCase()}
        </button>
    })

    //console.log(guessedLetters);

    //if something does not need to be in state variable, better!
    const wrongGuessedCount = 8 - guessedLetters.filter(letter => !currentWord.includes(letter)).length
    
    console.log(`Lives remaining: ${wrongGuessedCount}`);

    return (
        <>
        <section className="status-container">
            <h2 className="status-text">You Win!</h2>
            <p className="status-text">Well done 🎉</p>
        </section>
        <section className="languages-container">
            {langElements}
        </section>
        <section className="word-container">
            {letterElements}
        </section>
        <section className="keyboard-container">
            {keyboardElements}
        </section>
            <section className="new-game-container">
            <button className="new-game-btn">New Game</button>
        </section>
        </>
    )
}