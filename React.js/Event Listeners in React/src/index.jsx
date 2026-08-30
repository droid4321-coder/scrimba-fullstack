import ReactDOM from "react-dom/client";

function App() {

    function handleClick() {
        console.log("Button Clicked!");
    }

    function handleMouseOver() {
        console.log("You are over me! (the <img> element ;)");
    }

    return (
        <main className="container">
            <img src="https://picsum.photos/640/360" alt="Placeholder image from Picsum" onMouseOver={handleMouseHover}/>
            <button onClick={handleClick}>Click me</button>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)