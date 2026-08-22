const inputField = document.getElementById('email-input');

document.getElementById("sub-btn").addEventListener("click", async (e) => {
    e.preventDefault()

    try {
        //this fetches the .sub route, and sends the headers and gets the email input value
        const response = await fetch("/sub", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({email: inputField.value}),
        })
        const data = await response.json()
        console.log(data);
    } catch (error) {
        formMessageText.textContent = "An error has ocurred. Please try again"
        console.error("Error: ", error);
    }
})

/*
    When the POST request is sent, the data is sent in one or more chunks from the client to the server. The chunking is worked under the hood to the server when the last chunk arrives to the server, it will send a response to signal if everything was recieved correctly to the client. TCP handles all of that under the hood. This is an async process

    we are passing each chunk to the body. Under the hood, node separated the headers from the body
*/