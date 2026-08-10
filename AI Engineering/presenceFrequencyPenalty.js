/* Presence and Frequency Penalties 

    This offers control over how repetitive the output can be
    Presence penalty is a number from -2 to 2, and it defaults to 0. Higher numbers increase a models likelihood of talking about new topics
    A conversacion at low prescence penaltym will be repetitive, switched to high precence penalty it wont be repetitive.

    Frequency penalty is the same params as presence, but it controls the models likelihoos of repeating the exact same phrase, at higher numbers it decreases that likelihood.
    A conversation with low frequency penalty will be repetitive, high frequency penalty it wont repeat the same phrase.

*/

import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Dynamically finds the exact folder this file is running from
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly loads the .env file from this exact folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

// 1. Swap the OpenAI import for the official Google Gen AI SDK
import { GoogleGenAI } from "@google/genai";

// 2. Initialize the client (It automatically picks up process.env.GEMINI_API_KEY)
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// 3. Make the API request using Gemini's native format
const response = await ai.models.generateContent({
    model: "gemini-3.5-flash", // Best free tier model
    contents: "Recommend me some books about learning to code", // The user prompt
    config: {
        // This is Gemini's equivalent to the "system" role message
        systemInstruction: "You are a helpful assistant that knows a lot about books",
        stopSequences: ["\n"], //implementing stop sequences on Gemini,
        //frequencyPenalty: 1, //setting up the frequency and presence penalty
        //presencePenalty: 1, //these have been deprecated in gemini 3.5, but we can set the thinkingLevel
        temperature : 1,
    }
});

// 4. Get the answer directly using the .text property
//console.log(response);
console.log(response.text);