import Joke from "./../components/Joke.jsx"
import jokesData from "./jokesData.js"

//to send props that are not strings, you can surround them inside curly brackets.

//React does arrays, in this example we put an array inside React and it understands it. React can understand arrays of different data types, although it might lead to errors. React cant render objects unless that object is a specific type, JSX syntax object.

//If we do an array of JSX objects it will render in React. Cool!

//We can take an array of data and pass it to the React component thru props. In here we got the array of joke objects and mapped them to a variable, therefore putting them on the element and rendering them successfully in React. The data of the object should be passed as props to the object and verifying what are the key names of the objects in the data.

export default function App() {

    //const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"];

    //console.log(jokesData);

   /* const jsxNinjaTurtles = [
        <h1>Donatello</h1>,
        <h1>Michaelangelo</h1>,
        <h1>Rafael</h1>,
        <h1>Leonardo</h1>
    ] */

    const jokeElements = jokesData.map((joke) => {
        return <Joke
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })

    //const person = [{firstName: "Bob"}]
    return (
        <main>

            {jokeElements}
        
        </main>
    )
}

/* If a Joke does not have both props, you dont need to provide the setup, in this case, we can return a conditional statement or a ternary operator inside a display in style to not present it. This is demonstrated on the Joke.jsx file
    Non string props - In React we can pass props that are not strings, how can we do this? We encapsulate it between curly braces, even strings can be put inside brackets{}
*/

/* <Joke
            setup="Why did the React component break up with HTML?"
                punchline="It said, It's not you, it's JSX."
                upvotes={10}
                downvotes={5}
                comments={[
                        {
                    author: "Tester",
                    body: "This is a test comment",
                    title: "Comment",
                        },
                        {
                    author: "Tester2",
                    body: "This is another test comment",
                    title: "Comment2",
                }
                    ]}
                isPun={true}
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
            punchline="They pass down the props and hope for a re-render." 
        /> */
