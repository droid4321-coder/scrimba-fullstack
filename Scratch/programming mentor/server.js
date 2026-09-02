import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "node:path";
import fs from "node:fs/promises";
import http from "node:http";
import { fileURLToPath } from "node:url"; // Fixed: Added missing import

// Dynamically finds the exact folder this file is running from
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly loads the .env file from this exact folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

const PORT = 8000;

const server = http.createServer(async (req, res) => {
    
    // ROUTE 1: User visits the webpage (GET request)
    if (req.method === "GET" && req.url === "/") {
        try {
            const htmlPath = path.join(__dirname, "index.html");
            const htmlContent = await fs.readFile(htmlPath, "utf-8");
            
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(htmlContent);
        } catch (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Internal Server Error: Could not load index.html");
        }
        return; // Stop processing further for this request
    }

    // ROUTE 2: User submits a prompt (POST request)
    if (req.method === "POST" && req.url === "/") {
        let bodyText = "";

        // Collect incoming JSON chunks
        req.on("data", (chunk) => {
            bodyText += chunk; // Fixed: Corrected accumulation order
        });

        // Once full payload is received
        req.on("end", async () => {
            try {
                const bodyTextJSON = JSON.parse(bodyText);
                const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
                
                const response = await ai.models.generateContent({
                    model: "gemini-3.5-flash",
                    contents: bodyTextJSON.userPrompt, // Fixed: Target parsed JSON, not raw string
                    config: {
                        systemInstruction: "You are a mentor in programming that is going to help the user to solve an issue with his code. You will do this by giving hints and not by showing how to implement the code. Also, if a piece of code is given you will check it and report if there are any errors in the code."
                    }
                });

                // 1. Create a safe, unique filename using raw milliseconds
                const uniqueFilename = `log_${Date.now()}.json`;
                const logFilePath = path.join(__dirname, uniqueFilename);

                // 2. Format the massive Gemini response into beautiful, readable text
                const readableJsonData = JSON.stringify(response, null, 2);

                // 3. Write the file to your computer asynchronously
                await fs.writeFile(logFilePath, readableJsonData, "utf-8");
                console.log(`Saved full response to: ${uniqueFilename}`);

                // 4. Respond cleanly to the browser
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ mentorHint: response.text })); // Fixed: Sent clean text property

            } catch (error) {
                // Handle failures securely with JSON formatting
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ "error": `An error has occurred. Please try again: ${error.message}` }));
            }
        });
        return;
    }

    // Default catch-all for missing endpoints
    res.statusCode = 404;
    res.end("Not Found");
});

// Fixed: Wrapped in a real callback arrow function
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
