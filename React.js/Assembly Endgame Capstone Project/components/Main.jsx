import { languages } from "./../src/languages.js"

export default function Main() {
    
    const langElements = languages.map((item) => {
        return (
            <span key={item.name} style={{
                backgroundColor: item.backgroundColor,
                color: item.color,
            }} className="chip">{item.name}</span>
        )
    })

    return (
        <>
        <div className="status-container">
            <h2 className="status-text">You Win!</h2>
            <p className="status-text">Well done 🎉</p>
        </div>
        <div className="languages-container">
            {langElements}
        </div>
        </>
    )
}