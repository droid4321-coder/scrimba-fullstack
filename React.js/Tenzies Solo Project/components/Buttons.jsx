export default function Buttons(props) {

    const victoryCheck = props.dieMatchNumber === 10 ? true : false

    const enableReset = victoryCheck ? false : true

    return (
        <div className="reroll-container">
            <button disabled={victoryCheck} className="reroll-btn" id="reroll-btn" onClick={props.handleReroll}>Re-Roll</button>
            <button disabled={enableReset} className="reset-btn" id="reset-btn" onClick={props.resetGame}>New Game</button>
        </div>
    )
}