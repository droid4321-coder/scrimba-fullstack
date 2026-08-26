import { photoUrl } from "./assets/react-logo.png";

//we used a function before to do a custom component
// Example 
export function TemporaryName() {
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