import { useState} from "react";
import Die from "./Die.jsx";
import MatchNumber from "./MatchNumber.jsx";
import Buttons from "./Buttons.jsx";
import dieData from "./../src/die.js"

export default function Main() {

    const [die, setDie] = useState(dieData)

    const dieElements = dieData.map((die) => {
        return (
            <Die key={die.id} number={die.number} />
        )
    })

    return (
        <main className="main-container">
            <MatchNumber />
            {dieElements}
            <Buttons />
        </main>
    )
}