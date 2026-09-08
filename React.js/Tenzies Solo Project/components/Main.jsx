import { useState, useEffect, useRef } from "react";
import Die from "./Die.jsx";
import MatchNumber from "./MatchNumber.jsx";
import Buttons from "./Buttons.jsx";

export default function Main() {

    const [dieValue, setDieValue] = useState(Math.floor(Math.random() * 6) + 1)

    const [dieHold, setDieHold] = useState(false)

    function toggleDieHold() {
        setDieHold(prevValue => !prevValue)
    }

    function handleReroll() {
        if (!dieHold) {
            const randNumber = Math.floor(Math.random() * 6) + 1
            setDieValue(randNumber)
        }
    }

    const dieHoldCheck = dieHold ? "hold" : "no hold"

    return (
        <main className="main-container">
            <MatchNumber />
            <Die
                dieValue={dieValue}
                toggleDieHold={toggleDieHold}
                dieHoldCheck={dieHoldCheck}
            />
            <Buttons
                handleReroll={handleReroll}
            />
        </main>
    )
}