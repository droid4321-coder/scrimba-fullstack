export default function MatchNumber(props) {
    return (
        <div className="pnumber-container">
            <h2>NUMBER MATCH COMPONENT</h2>
            <label htmlFor="pnumber">Enter number to match dice:</label>
            <input type="number" name="pnumber" id="pnumber" min={1} max={6} defaultValue={1}/>
        </div>
    )
}