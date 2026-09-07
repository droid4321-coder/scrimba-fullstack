//importing useState from React

import { useState, useEffect } from "react"

//main section with a form to put the top and bottom text. Also, there is a meme div that sets up the image, and also spans the top and bottom of the meme
export default function Main() {

    //state for top, bottom text and image url

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg",
    })

    //state for imgflip api

    const [memeArr, setMemeArr] = useState(null);

    //this function logs the string to the console whenever a key is pressed in the element we have the onChange attribute. This will update every time the element changes.

    //Because this is also an event listener with the event parameter, we can use it to change the text in other element, setting the value to whats on the text value

    //the value variable gets the current target of the event and logs it to the console. Every keystroke is logged to the console. By setting the state to the value, we can edit the meme while editing the textbox, beautiful code! :)

    //By putting the name inside the destructured variable, we can put it in the state setter function, and therefore there will be no conflicts on the top and bottom text if they have the same thing.

    //useEffect to get the iamges url array from ImgFlip
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes") //https://api.imgflip.com/get_memes -> ImgFlip API Meme Images
            .then(res => res.json())
        .then(data => setMemeArr(data.data.memes)) //in here we need to use dot notation to get the image urls
    }, [])

    //You might be tempted to use the asybc.await function, but, why do we dont use it here? When using useEffect, we cannot use async await modules inside it. Explaination will come now.

    console.log(memeArr);

    function handleChange(event) {
        const {value, name} = event.currentTarget;
        //console.log(value);

        setMeme((prevMeme) => {
            return ({
                ...prevMeme,
                [name]: value,
            })
        })
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
            <div className="scratch">
                <p></p>
            </div>
        </main>
    )
}