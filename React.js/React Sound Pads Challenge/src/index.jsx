import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.createRoot(document.getElementById('root'))
    .render(<App darkMode={true} />);

/* if we would add a darkmode to the app, we can do it in the same render, like render(<App darkMode={true} />) */