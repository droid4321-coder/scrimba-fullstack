import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

import OpenAI from "openai";

// Point the client to OpenRouter instead of OpenAI
const openai = new OpenAI({
    baseURL: "https://openrouter.ai",
    apiKey: process.env.OPENROUTER_API_KEY
});

const messages = [
    {
        role: "system",
        content: "You are a helpful general knowledge expert"
    },
    {
        role: "user",
        content: "Who invented the television?"
    }
];

async function main() {
    try {
        const response = await openai.chat.completions.create({ 
            // Use a powerful, completely free model hosted on OpenRouter
            /* The Fix: Switch to a different free model to see if it responds. Replace "meta-llama/llama-3-8b-instruct:free" with one of these robust alternatives:google/gemini-2.5-flash:free mistralai/mistral-7b-instruct:free qwen/qwen-2-7b-instruct:free */
            model: "google/gemini-2.5-flash:free", 
            messages: messages
        });

        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error("Error running script:", error);
    }
}

main();
