import { useState } from "react"
import clsx from "clsx"
import { languages } from "./../src/languages.ts"
import { getFarewellText } from "./../src/utils.ts"
import RandomWord from "./../src/words.ts"
import Confetti from "react-confetti"

export default function Main() {

    /* stuff remaining:
        Farewell messages - done!
        disable the keyboard - done!
        fix a11y issues - done!
        make new game work - done!
        choose random word - done!
        confetti when win! - done!

        extra ideas:
        Display remaining guesses count
        Animation when game is lost
        Implement a timer limit
        Deploy this lol
    */

    //states
    const [currentWord, setCurrentWord] = useState(() => RandomWord())

    // console.log(currentWord);

    const [guessedLetters, setGuessedLetters] = useState([])

    //variables & functions
    const alphabet = "abcdefghijklmnopqrstuvwxyz"


    //if something does not need to be in state variable, better!
    const wrongGuessedCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
    
    const langElements = languages.map((item, index) => {
        const isLanguageLost = index < wrongGuessedCount
        return (
            <span key={item.name} style={{
                backgroundColor: item.backgroundColor,
                color: item.color,
            }} className={clsx("chip", {
                "lost": isLanguageLost && "lost",
            })}>{item.name}</span>
        )
    })

    //convert the word to an array, and check if in the guessed letters array, every letter is present
    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))

    //we need assembly here, I will change this later
    const isGameLost = wrongGuessedCount === languages.length - 1

    // console.log(isGameWon);
    // console.log(isGameLost);

    const isGameOver = isGameWon || isGameLost

    const letterElements = currentWord.split("").map((letter, index) => {
        return <span
            key={index}
            className={clsx("word", {
                "flip-in-hor-bottom": guessedLetters.includes(letter),
                "missed": isGameLost && !guessedLetters.includes(letter)
            })}
        >
            {guessedLetters.includes(letter) || isGameOver ? letter.toUpperCase() : ""}
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
            disabled={isGameOver}
            aria-disabled={guessedLetters.includes(letter)}
            aria-label={`letter ${letter}`}
            key={letter}
            className={clsx("keyboard-letter",
                {
                    "right": guessedLetters.includes(letter.toLowerCase()) && currentWord.includes(letter.toLowerCase()),
                    "wrong": guessedLetters.includes(letter.toLowerCase()) && !currentWord.includes(letter.toLowerCase()),
                    "disabled" : isGameOver
                }
            )
        }
            onClick={() => addGuessedLetter(letter.toLowerCase())}
        >
            {letter.toUpperCase()}
        </button>
    })

    //console.log(guessedLetters);
    
    // console.log(`Wrong guesses: ${wrongGuessedCount}`);

    //this guesses if the last letter is not included in the current word string. if true, executes message, false, no message
    const isLastGuessWrong = guessedLetters.length > 0 && !(currentWord.includes(guessedLetters[guessedLetters.length - 1])) ? true : false

    function resetGame() {
        setCurrentWord(() => RandomWord())
        setGuessedLetters([])
    }

    return (
        <>
            {isGameWon && <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={1000}
            />}
            <section
                aria-live="polite"
                role="status"
                className={clsx("status-container", {
                won: isGameWon,
                lost: isGameLost,
                farewell: !isGameOver && isLastGuessWrong
            })}>
            {wrongGuessedCount > 0 && isLastGuessWrong && <p className="farewell-text">{getFarewellText(languages[wrongGuessedCount - 1].name)}</p>}
            {/* {!isLastGuessWrong && <p className="status-text">You got one!</p>} */}
            {isGameWon && <h2 className="status-text">You Win!</h2>}
            {isGameWon && <p className="status-text">Well done 🎉</p>}
            {isGameLost && <h2 className="status-text">Game over!</h2>}
            {isGameLost && <p className="status-text">You Lose! Better start learning Assembly 😭</p>}
            {/* {isGameLost && <p className="status-text">The word was: {currentWord}</p>} */}
            {!isGameOver && !isGameWon && <h2>{"\u00A0"}</h2>}
            {!isGameOver && !isGameWon && <p>{"\u00A0"}</p>}
        </section>
        <section className="languages-container">
            {langElements}
        </section>
        <section className="word-container">
            {letterElements}
        </section>
            
            <section
                className="sr-only"
                aria-live="polite"
                role="status"
            >
                <p>
                    {currentWord.includes(guessedLetters[guessedLetters.length - 1]) ? `Correct: The last letter ${guessedLetters[guessedLetters.length - 1]} is in the word.` : `Sorry, the letter ${guessedLetters[guessedLetters.length - 1]} is not in the word. You have ${languages.length - 1} tries remaining` }
                </p>
                <p>Current Word: {currentWord.split("").map(letter => guessedLetters.includes(letter) ? letter + "." : "blank").join(" ")}</p>
        </section>
        <section className="keyboard-container">
            {keyboardElements}
        </section>
            <section className="new-game-container">
            {isGameOver && <button onClick={resetGame}className="new-game-btn">New Game</button>}
        </section>
        </>
    )
}