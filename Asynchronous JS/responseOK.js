//response ok tells us if a repsonse was successful
//status codes, 200-299 successful TRUE, 404, FALSE, 500, FALSE
//response ok is a boolean

async function getDogImage() {
    try {
        const response = await fetch("https://apis.scrimba.com/dog.ceo/api/breeds/images/random");
        if (!response.ok) {
            throw new Error("There was a problem with the API.")
        }
        const data = await response.json();
        console.log(data); // 1. Logs data first
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Done!"); // 2. Logs "Done!" last
    }
}

getDogImage();

//Diferences between try/catch and response.ok
//try/catch = Catches exceptions and errors that occur during the execution of the code, including network errors, and other unexpected issues
//response.ok = checks the sucess of the HTTP response status, which might not throw an error but still indicates a failure