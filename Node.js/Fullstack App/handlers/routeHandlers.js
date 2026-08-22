//this will handle get and post requests to API
import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";

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

//handlePost
export async function handlePost(req, res) {
    try {
        //parsed but not sanitized
        const parsedBody = await parseJSONBody(req);
        //sending info to the data json
        await addNewSighting(parsedBody);
        sendResponse(res, 201, "application/json", JSON.stringify(parsedBody)) //says we recieved the data and strings it to the array
        //console.log(rawBody), 201 - Created
    } catch (err) {
        console.log(`An error ocurred: ${err}`);
        sendResponse(res, 400, "application/json", JSON.stringify({error: err.message,})) //400 - Bad Request
    }
}

/*
    We need to handle any incoming request and parse it so the appropiate content is where we want it
*/