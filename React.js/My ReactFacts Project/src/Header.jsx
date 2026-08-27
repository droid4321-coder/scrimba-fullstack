import photoUrl from './assets/react-logo.png';

export function Header() {
    return (
        <>
        <header className="header">
                <img src={photoUrl} className="react-logo" alt="React Logo" />   
                <nav>
                    <ul className="nav-list">
                        <li className="li-el">Pricing</li>
                        <li className="li-el">About</li>
                        <li className="li-el">Contact</li>
                    </ul>
                </nav>
        </header>
        </>
    )
}