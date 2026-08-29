import globePNG from "./../src/assets/globe.png";

export default function Header() {
    return (
        <header className="header">
            <img src={globePNG} alt="globe icon" className="header-img" />
            <h1 className="header-text">my travel journal.</h1>
        </header>
    )
}