import Joke from "./../components/Joke.jsx"

export default function App() {
    return (
        <>
            <h1>Jokes</h1>
        <Joke
            setup="Why did the React component break up with HTML?"
            punchline="It said, It's not you, it's JSX."
        />
        <Joke
            setup="Why do React developers prefer hooks over classes?"
            punchline="Because they don't like dealing with commitment issues related to this"
            />
        <Joke
            setup="Why did the React developer go to the eye doctor?"
            punchline="They kept losing their state and couldn't find their context."
            />
        <Joke
            setup="Why was the React component so bad at remembering its childhood?"
            punchline="It forgot to provide a unique key attribute for its memories."
            />
        <Joke
            setup="How does a React developer invite people to a party?"
            /*punchline="They pass down the props and hope for a re-render." */
        />
        </>
    )
}

/* If a Joke does not have both props, you dont need to provide the setup*/