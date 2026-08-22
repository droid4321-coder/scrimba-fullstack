//this will handle get and post requests to API

import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

//handleGet
export async function handleGet(req, res, data) {
    try {
        const content = await getData("data.json");
        const strContent = JSON.stringify(content);
        sendResponse(req, res, 200, "application/json", strContent);
    } catch (error) {
        console.log("An error has ocurred: ", error);
    } finally {
        console.log("Handled GET request!");
    }
}

//handlePost
export async function handlePost(req, res) {
    try {
        console.log("POST request recieved!");
    } catch (error) {
        
    }
}