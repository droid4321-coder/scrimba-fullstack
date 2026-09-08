export default function Buttons(props) {
    return (
        <div className="reroll-container">
            <button className="reroll-btn" id="reroll-btn" onClick={props.handleReroll}>Re-Roll</button>
            <button className="reset-btn" id="reset-btn">New Game</button>
        </div>
    )
}