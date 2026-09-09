export default function MatchNumber(props) {

    const victoryCheck = props.dieMatchCount === 10 ? "visible" : "hidden"

    return (
        <div className="pnumber-container">
            <label htmlFor="pnumber">Enter number to match dice:</label>
            <input type="number" name="pnumber" id="pnumber" min={1} max={6} defaultValue={props.Matchnumber} onChange={props.handleNumberChange} />
            <p>You have {props.dieMatchCount} out of 10 matches</p>
            <p className={victoryCheck}>Victory! Congratulations!</p>
        </div>
    )
}