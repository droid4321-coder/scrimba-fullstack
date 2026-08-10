/*
    Stop sequence

    A model stops producing beause it finished what it wanted to do, ran out of tokens, or it encountered a stop sequence
    We can give a model an array of up to 4 sequences, it will stop generating when it tries to produce a stop sequence and the outputted text will not include a stop sequence.
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
    contents: "", // The user prompt
    config: {
        // This is Gemini's equivalent to the "system" role message
        systemInstruction: "",
        //stopSequences: ["\n"], //implementing stop sequences on Gemini
        //temperature : 1,
    }
});

// 4. Get the answer directly using the .text property
//console.log(response);
console.log(response.text);