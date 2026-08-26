import { createRoot } from "react-dom/client";
import photoUrl from './assets/react-logo.png';

const root = createRoot(document.getElementById("root"));

root.render(
    <>
    <Page />
    </>
)

//we used a function before to do a custom component
// Example 
    function TemporaryName() {
    return (
    <main>
        <img width="40px" src={ photoUrl } alt="React Logo" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is mantained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
    )
    }

function Page() {
    return (
        <>
        <header>
            <img src={photoUrl} width="40px" alt="React Logo" />   
        </header>
        <main>
        <h1>Why I want to learn react</h1>
        <ol>
            <li>Because its cool!</li>
        </ol>
        </main>
        <footer>
            <p>© 20xx Droid Development. All rights reserved.</p>    
        </footer>
        </>
        )
    }