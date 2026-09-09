import { useState} from "react";
import Die from "./Die.jsx";
import MatchNumber from "./MatchNumber.jsx";
import Buttons from "./Buttons.jsx";
import dieData from "./../src/die.js"

export default function Main() {

    const [die, setDie] = useState(dieData)

    const [matchNumber, setMatchNumber] = useState(1)

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
    } 

    function handleNumberChange(event) {
        setMatchNumber(Number(event.target.value))
    }

    return (
        <main className="main-container">
            <MatchNumber matchNumber={matchNumber} handleNumberChange={handleNumberChange} dieMatchCount={dieMatchCount} />
            {dieElements}
            <Buttons
                handleReroll={handleReroll}
            />
        </main>
    )
}