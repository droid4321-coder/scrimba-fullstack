export default function MatchNumber(props) {

    const victoryCheck = props.dieMatchCount === 10 ? "visible" : "hidden"

    let miliseconds = props.timer % 100
    let seconds = Math.floor(props.timer / 100) % 60
    let minutes = Math.floor(props.timer / 6000)

    return (
        <div className="pnumber-container">
            <label htmlFor="pnumber">Enter number to match dice:</label>
            <input type="number" name="pnumber" id="pnumber" min={1} max={6} value={props.matchNumber} onChange={props.handleNumberChange} />
            <p>Turn {props.turn}. You have {props.dieMatchCount} out of 10 matches</p>
            <p>Timer: {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:{miliseconds.toString().padStart(2, "0")}</p>
            <p className={victoryCheck}>Victory! Congratulations!</p>
        </div>
    )
}