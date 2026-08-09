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
    contents: "Who invented the television?", // The user prompt
    config: {
        // This is Gemini's equivalent to the "system" role message
        systemInstruction: "You are a helpful general knowledge expert"
    }
});

// 4. Get the answer directly using the .text property
console.log(response);
console.log(response.text);

/* 
The invention of the television cannot be credited to a single person. Instead, it was the result of evolution and contributions from several inventors working on different technologies. 

However, history generally recognizes two main pioneers depending on the type of television: **mechanical** or **electronic**.

Here are the key figures:

### 1. Philo Farnsworth (Electronic Television)
**Philo Farnsworth**, an American inventor, is widely credited with inventing the **first fully functional, all-electronic television system**. 
* **The Breakthrough:** In 1927, at just 21 years old, Farnsworth successfully transmitted the first electronic television image (a simple straight line) in his laboratory in San Francisco.
* **How it worked:** Unlike mechanical systems, Farnsworth’s system used a cathode-ray tube to capture and display images, which is the direct ancestor of modern television technology.
* **Fun Fact:** He came up with the idea of "scanning" an image line-by-line while watching the parallel rows of a plowed potato field on his family's farm when he was 14.

### 2. John Logie Baird (Mechanical Television)
**John Logie Baird**, a Scottish engineer, is credited with inventing the **first working mechanical television**.
* **The Breakthrough:** In 1925, Baird gave the first public demonstration of moving silhouette images, and in 1926, he demonstrated the first live, moving images in grayscale.
* **How it worked:** Baird’s system used a rotating, perforated disc (called a Nipkow disk) to scan images mechanically. While revolutionary at the time, mechanical television was soon phased out because electronic systems offered much better picture quality.

### 3. Vladimir Zworykin (The RCA Rival)
**Vladimir Zworykin**, a Russian-born American inventor working for Westinghouse and later RCA, played a massive role in television history.
* In 1923, he patented the "Iconoscope" (a television transmitting tube) and the "Kinescope" (a receiver). 
* RCA used Zworykin's designs to try to bypass Farnsworth's patents, leading to a decade-long legal battle. Ultimately, the courts ruled in favor of Farnsworth, and RCA had to pay him millions in licensing fees.

### Summary
* **John Logie Baird** invented the first **mechanical** television (1925).
* **Philo Farnsworth** invented the first **electronic** television (1927), which is the technology that shaped the modern world. */
