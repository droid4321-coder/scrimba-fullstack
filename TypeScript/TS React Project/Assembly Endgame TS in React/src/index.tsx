import ReactDOM from "react-dom/client";
import App from "./App.tsx"

const container = document.getElementById("root")

if (!container) {
    throw new Error("Cannot find the Root element on index.html")
}

ReactDOM.createRoot(container).render(<App />)