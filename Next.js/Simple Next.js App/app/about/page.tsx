import type { JSX } from "react/jsx-runtime";

export default function About() : JSX.Element {
    return <h1>Welcome to the About Page!</h1>
}

//by adding a folder with the route name, like about in this case, and making the React component, we can go to the /about (in this case, localhost:3000/about, and this will be shown!)

//it needs to be page.tsx the file because next.js is looking at that file in particular