import { createRoot } from "react-dom/client";

// 1.create a root - we need to do this to have a place where we can tell React where to put the component in our HTML DOM
const root = createRoot(document.getElementById("root"));

// 2. render some markup in the root
root.render(<h1>Testing Testing!</h1>)
