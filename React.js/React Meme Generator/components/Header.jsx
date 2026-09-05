import trollFace from "../images/troll-face.png"

//this makes up the header with the image and the h1 component

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}