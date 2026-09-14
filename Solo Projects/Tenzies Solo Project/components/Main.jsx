import { useState} from "react";
import Die from "./Die.jsx";
import MatchNumber from "./MatchNumber.jsx";
import Buttons from "./Buttons.jsx";
import dieData from "./../src/die.js"

export default function Main() {

    const [die, setDie] = useState(dieData)

    const [matchNumber, setMatchNumber] = useState(1)

    const [turn, setTurn] = useState(1)

    let [timer, setTimer] = useState(0)

    const [running, isRunning] = useState(false)

    const [win, setWin] = useState(false)

    const dieMatch = die.filter((item) => item.number === matchNumber)

    const dieMatchCount = dieMatch.length

    const dieElements = die.map((item) => {
        return (
            <Die key={item.id} id={item.id} number={item.number} hold={item.hold} toggleHold={() => toggleHold(item.id)}  />
        )
    })

    function toggleHold(id) {
        setDie((prevHold) => {
            return prevHold.map((item) => {
                return item.id === id ? {...item, hold : !item.hold} : item
            })
        })
    }

    function handleReroll() {
        setDie((prevValue) => {
            return prevValue.map((item) => {
                if (!item.hold) {
                    return ({
                        ...item,
                        number: Math.floor(Math.random() * 6) + 1
                    })
                } else {
                    return item
                }
            })
        })

        setTurn(prevValue => prevValue + 1)
    } 

    function handleNumberChange(event) {
        setMatchNumber(Number(event.target.value))
    }

    function resetGame() {
        setDie((prevValue) => {
            return prevValue.map((item) => {
                return ({
                    ...item,
                    number: Math.floor(Math.random() * 6) + 1,
                    hold: false
                })
            })
        })

        setTurn(1)
    }

    function handleTimer() {
        const interval = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 10)

        isRunning(prev => !prev)

        if (dieMatchCount === 10) {
            setWin(prev => !prev)
        }
    }

    return (
        <main className="main-container">
            <MatchNumber
                matchNumber={matchNumber}
                handleNumberChange={handleNumberChange}
                dieMatchCount={dieMatchCount}
                turn={turn}
                timer={timer}
            />
            <div className="die-button-container">
            {dieElements}
            <Buttons
                handleReroll={handleReroll}
                dieMatchCount={dieMatchCount}
                resetGame={resetGame}
                handleTimer={handleTimer}
                running={running}
                />
            </div>
        </main>
    )
}