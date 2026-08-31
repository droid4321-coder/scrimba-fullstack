import React from "react" //adding conditional rendering

export default function Joke({ setup, punchline, upvotes, downvotes, comments, isPun }) {

    const [isShown, setIsShownn] = React.useState(false)

    function toggleShown(){
        setIsShownn(previsShown => !previsShown);
    }

    console.log(isShown);

    //console.log(setup, punchline, upvotes, downvotes, comments, isPun)

    //we can conditional render to show or hide stuff -> {punchline && <p className={isShown ? "visible" : "hidden"}>Punchline: {punchline}</p>}
    //this is cleaner -> {isShown && <p>{punchline}</p>} shows the punchline depending on the condition of isShown

    /* We use the And && operator to check for truthiness
        if (true && true) {
        console.log("Everything is true")
        }
        In this snippet of code, the conditional rendering is checked from left to right, the left argument is checked first and then goes to the right. So if the left is false, automatically goes to false

        Heres an interesting code to run:
        if (true && (console.log("This code is running"))) {
            console.log("This is true")
        }
        The console.log runs in this snippet of code

        However, if we change the true to false, it will not run, because the condition in the left is false, and it runs left to right, it doesnt run the console.log. If the console log is first, then it will run.

        This is why && works on the code in the rEact component
    */
    
    
    return (
        <>
            {setup && <h3>{setup}</h3>}
            {isShown && <p>{punchline}</p>}
            <p>{upvotes && <span>Upvotes: {upvotes}</span>} {downvotes && <span>Downvotes: {downvotes}</span>}</p>
            <button onClick={toggleShown}>{ isShown ? "Hide punchline" : "Show punchline" }</button>
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