/**
 * Gemini AI Completion Service
 * 
 * Demonstrates secure environment variable handling, dynamic path resolution,
 * and robust error trapping using the modern official Google Gen AI SDK.
 */

import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { GoogleGenAI } from "@google/genai";

// 1. DYNAMIC ENVIRONMENT SETUP
// Ensures the .env file is loaded correctly even if executed from outside the folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

// 2. CLIENT INITIALIZATION
// Automatically checks process.env.GEMINI_API_KEY for your key (including 'AQ.' formats)
const ai = new GoogleGenAI(); 

/**
 * Executes a text generation request using the Gemini model.
 * @param {string} userPrompt - The core question or task for the AI model.
 * @returns {Promise<string|null>} The generated text response, or null if failed.
 */
async function fetchGeminiResponse(userPrompt) {
    // Input validation
    if (!userPrompt) {
        console.error("Validation Error: A user prompt must be provided.");
        return null;
    }

    try {
        console.log(`Sending request to Google AI using model: gemini-2.5-flash...`);
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", // Highly stable, lightning-fast free tier model
            contents: userPrompt,
        });

        // Safe property extraction via optional chaining
        const answer = response?.text;

        if (answer) {
            return answer;
        } else {
            console.warn("⚠️ API handshake succeeded, but returned an empty response structure.");
            return null;
        }

    } catch (error) {
        // ROBUST ERROR HANDLING
        console.error("❌ Gemini API Service Failure:");
        console.error(`Error Message: ${error.message}`);
        
        // Help troubleshoot potential configuration or network issues
        if (error.message.includes("API key")) {
            console.error("👉 Solution Check: Verify GEMINI_API_KEY exists in your local .env file.");
        }
        return null;
    }
}

// 3. EXECUTION BLOCK
async function main() {
    const samplePrompt = "Who invented the television?";
    const result = await fetchGeminiResponse(samplePrompt);

    if (result) {
        console.log("\n=================== GEMINI AI ANSWER ===================");
        console.log(result);
        console.log("========================================================\n");
    } else {
        console.log("\n❌ Failed to generate response. Check configuration or console logs above.");
    }
}

// Run the service
main();
