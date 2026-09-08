export default function Die(props) {
    return (
        <div className="die-container">
            <button className="die" onClick={props.toggleDieHold}>{`${props.dieValue} ${props.dieHoldCheck}`}</button>
        </div>
    )
}