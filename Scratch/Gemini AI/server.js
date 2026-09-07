import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "node:path";
import fs from "node:fs/promises";
import http from "node:http";
import { fileURLToPath } from "node:url";

// Dynamically finds the exact folder this file is running from
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly loads the .env file from this exact folder
dotenv.config({
    path: path.resolve(__dirname, ".env")
});

const PORT = 8000;


// Default system instruction
const defaultSystemPrompt = `
You are a programming mentor helping the user solve problems with their code.

Give hints rather than directly providing the implementation.
Do not immediately give the complete solution unless the user explicitly asks for it.

If the user provides code, analyze it and identify errors, bugs, or potential problems.

Explain the relevant programming concepts so the user can understand why something is wrong.

Adapt your explanations to the user's apparent skill level.
`;


const server = http.createServer(async (req, res) => {

    // ROUTE 1: User visits the webpage (GET request)
    if (req.method === "GET" && req.url === "/") {

        try {

            const htmlPath = path.join(__dirname, "index.html");

            const htmlContent = await fs.readFile(
                htmlPath,
                "utf-8"
            );

            res.statusCode = 200;
            res.setHeader(
                "Content-Type",
                "text/html"
            );

            res.end(htmlContent);

        } catch (err) {

            res.statusCode = 500;

            res.setHeader(
                "Content-Type",
                "text/plain"
            );

            res.end(
                "Internal Server Error: Could not load index.html"
            );
        }

        return;
    }


    // ROUTE 2: User submits a prompt (POST request)
    if (req.method === "POST" && req.url === "/") {

        let bodyText = "";


        // Collect incoming JSON chunks
        req.on("data", (chunk) => {
            bodyText += chunk;
        });


        // Once full payload is received
        req.on("end", async () => {

            try {

                const bodyTextJSON = JSON.parse(bodyText);


                // Get the user's prompt
                const userPrompt = bodyTextJSON.userPrompt;


                // Use custom system instruction if provided.
                // Otherwise use the default mentor instruction.
                const systemPrompt =
                    bodyTextJSON.systemPrompt?.trim()
                    || defaultSystemPrompt;


                const ai = new GoogleGenAI({
                    apiKey: process.env.GEMINI_API_KEY
                });


                const response = await ai.models.generateContent({

                    model: "gemini-3.5-flash",

                    contents: userPrompt,

                    config: {
                        systemInstruction: systemPrompt
                    }
                });


                // Create a safe, unique filename
                const uniqueFilename =
                    `log_${Date.now()}.json`;

                const logFilePath =
                    path.join(
                        __dirname,
                        uniqueFilename
                    );


                // Save full Gemini response
                const readableJsonData =
                    JSON.stringify(
                        response,
                        null,
                        2
                    );


                await fs.writeFile(
                    logFilePath,
                    readableJsonData,
                    "utf-8"
                );


                console.log(
                    `Saved full response to: ${uniqueFilename}`
                );


                // Respond to browser
                res.statusCode = 200;

                res.setHeader(
                    "Content-Type",
                    "application/json"
                );


                res.end(
                    JSON.stringify({
                        mentorHint: response.text
                    })
                );


            } catch (error) {

                res.statusCode = 500;

                res.setHeader(
                    "Content-Type",
                    "application/json"
                );


                res.end(
                    JSON.stringify({
                        error:
                            `An error has occurred. Please try again: ${error.message}`
                    })
                );
            }
        });

        return;
    }


    // Default catch-all
    res.statusCode = 404;
    res.end("Not Found");
});


// Start server
server.listen(PORT, () => {

    console.log(
        `Server listening on port ${PORT}`
    );

});
