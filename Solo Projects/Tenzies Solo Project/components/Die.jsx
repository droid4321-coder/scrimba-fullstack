export default function Die(props) {


    const holdCheck = props.hold ? "hold" : ""

    return (
        <button className={`${holdCheck}`} onClick={props.toggleHold}>{`${props.number}`}</button>
    )
}