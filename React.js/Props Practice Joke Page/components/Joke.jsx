export default function Joke({ setup, punchline, upvotes, downvotes, comments, isPun }) {
    console.log(setup, punchline, upvotes, downvotes, comments, isPun)
    return (
        <>
            {setup && <h3>Setup: {setup}</h3>}
            {punchline && <p>Punchline: {punchline}</p>}
            <p>{upvotes && <span>Upvotes: {upvotes}</span>} {downvotes && <span>Downvotes: {downvotes}</span>}</p>
            {comments && <div>Comments: {comments.map((comment, index) => {
               return ( <div key={index}>
                    <h4>{comment.title} from {comment.author}</h4>
                    <p>{comment.body}</p>
                </div>)
            })}</div>}
            {isPun && <p>Is this a pun?: {isPun ? "Yes" : "No"}</p>}
        </>
    )
}

//by doing the {setup && component} we tell React to render the element of the prop is declared, conditional rendering
//other method = <p style={{display: props.punchline ? "block" : "none"}}>Punchline: {props.punchline}</p> using ternary operator to display if present.