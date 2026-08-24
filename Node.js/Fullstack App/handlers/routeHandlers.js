//this will handle get and post requests to API
import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sightingEvents } from "../events/sightingEvents.js";
import { stories } from "../data/stories.js";

//handleGet
export async function handleGet(res, data) {
    try {
        const content = await getData(data);
        const strContent = JSON.stringify(content);
        sendResponse(res, 200, "application/json", strContent);
    } catch (error) {
        console.log("An error has ocurred: ", error);
    } finally {
        console.log("Handled GET request!");
    }
}

//handleNews
export async function handleNews(req, res) {
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/event-stream")
    res.setHeader("Cache-Control", "no-cache")
    res.setHeader("Connection", "keep-alive")

    setInterval(() => {

        let randomNews = Math.floor(Math.random() * stories.length)

        let currentStory = stories[randomNews]

        console.log(`Sent story to news feed -> ${currentStory}`);

        res.write(
            `data: ${JSON.stringify({
                event: "show-story",
                story: currentStory
            })}\n\n`
        )
        
    }, 10000);
}

//handlePost
export async function handlePost(req, res) {
    try {
        //parsed but not sanitized
        const parsedBody = await parseJSONBody(req);

        //sanitize
        const sanitizedBody = sanitizeInput(parsedBody)
        //sending info to the data json
        await addNewSighting(sanitizedBody);

        //emit the event when an interesting thing is found and pass the object to send the location
        sightingEvents.emit("sighting-added", sanitizedBody);

        //send the response
        sendResponse(res, 201, "application/json", JSON.stringify(parsedBody)) //says we recieved the data and strings it to the array
        //console.log(rawBody), 201 - Created
    } catch (err) {
        console.log(`An error ocurred: ${err}`);
        sendResponse(res, 400, "application/json", JSON.stringify({error: err.message,})) //400 - Bad Request
    } finally {
        console.log("Handled POST request!");
    }
}

/*
    We need to handle any incoming request and parse it so the appropiate content is where we want it

    Sanitization is important because of attacks like XSS (Cross Site Scripting) which is a security vulnerability that allows an attacker to inject malicious scripts into web pages

    If no sanitization in code we will be propense to attacks, to do this we will use an helper called sanitize-html which will do this 
*/