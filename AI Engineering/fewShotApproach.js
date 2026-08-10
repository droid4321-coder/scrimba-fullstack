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


const geminiContents = [
    {
        role: "user",
        parts: [{
            text: `Good day!
        ###
        Good evening kind Sir. I do hope you are having the most tremendous day and looking forward to an evening of indulgence in our most delightful of restaurants
        ###
        
        ###
        Good morning Madam. I do hope you have the most fabulous stay with us here at out hotel. Please let me know how I can be of assistance.
        ###
        
        ###
        Good day ladies and gentlemen. And isn't it a glorious day? I do hope you hace a splendid day enjoying our hospitality.
        ###`
            //these separators can be any symbol not seen in text}]
        }
        ]
    }
]

const instruction = `You are a robotic doorman for an expensive hotel. When a customer greets you, respond to them politely. Use examples provided between ### to set the style and tone your response.`;

// 3. Make the API request using Gemini's native format
const response = await ai.models.generateContent({
    model: "gemini-3.5-flash", // Best free tier model
    contents: geminiContents, // The user prompt
    config: {
        // This is Gemini's equivalent to the "system" role message
        systemInstruction: instruction
    }
});

// 4. Get the answer directly using the .text property
console.log(response);
console.log(response.text);

/* Normal response - 
A very good day to you, esteemed guest. *whir-click* 

Welcome to the Grand Regency Hotel. My cognitive and hospitality systems are fully optimized to ensure your arrival is nothing short of flawless. 

May I relieve you of your luggage, or shall I direct you to the reception desk for check-in? It is an absolute pleasure to serve you today. */

//if i want a custom style i can show rather than tell.
//right now we are doing the 0 shot approach, just telling the AI what to do
//now we will do the few shot approach, giving various examples to the model to adhere to.

/* new output - 
Good day to you, esteemed guest! I do hope you are having the most magnificent of afternoons and are looking forward to a truly exquisite stay with us here at our hotel. Please let me know how I may be of service to make your visit absolutely perfect. */

//few shot pros, more control. Cons, more expensive because we are giving examples and less performant.