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
    contents: "Recommend me some books about learning to code", // The user prompt
    config: {
        // This is Gemini's equivalent to the "system" role message
        systemInstruction: "You are a helpful assistant that knows a lot about books",
        stopSequences: ["\n"], //implementing stop sequences on Gemini
        //temperature : 1,
    }
});

// 4. Get the answer directly using the .text property
//console.log(response);
console.log(response.text);

//og answer
/* 

Here are the best books for learning to code, from absolute beginner to mindset and philosophy.

---

### 1. For Absolute Beginners (No Experience Required)
If you have never written a line of code in your life, these books are the perfect starting point. They focus on **Python**, which is widely considered the best first language to learn.

*   **"Python Crash Course" by Eric Matthes**
    *   **Best for:** The absolute beginner who wants to build projects quickly.
    *   **Why read it:** This is the best-selling programming book in the world for a reason. The first half teaches you the basics of Python (variables, loops, functions), and the second half guides you through three major projects: a Space Invaders-style arcade game, data visualizations, and a simple web app. 
    *   **Focus:** Python.

*   **"Automate the Boring Stuff with Python" by Al Sweigart**
    *   **Best for:** Office workers, students, and anyone who wants to use coding to make their daily life easier.
    *   **Why read it:** Instead of teaching you abstract computer science theory, this book teaches you how to write programs that do practical tasks. You'll learn how to scrape data from websites, rename thousands of files at once, update Excel spreadsheets, and automate emails. 
    *   **Focus:** Practical Python scripting.

---

### 2. For Aspiring Web Developers (HTML, CSS, & JavaScript)
If your goal is to build websites, web apps, or become a front-end developer, these are the gold standards.

*   **"HTML and CSS: Design and Build Websites" by Jon Duckett**
    *   **Best for:** Visual learners.
    *   **Why read it:** Most coding books are wall-to-wall text. This book is beautifully designed, full of infographics, and laid out like a high-end magazine. It makes learning the building blocks of the web (HTML and CSS) incredibly accessible and enjoyable.
    *   **Focus:** Front-end web design.

*   **"Eloquent JavaScript" by Marijn Haverbeke**
    *   **Best for:** Someone who knows basic HTML/CSS and wants to learn the programming language of the web.
    *   **Why read it:** JavaScript is the language that makes websites interactive. This book is brilliant but challenging; it goes deep into the language and teaches you how to write clean, effective code. *Note: You can also read this book for free online on the author's website.*
    *   **Focus:** JavaScript.

---

### 3. For Understanding How Computers Actually Work
If you want to understand the "magic" behind the screen before you start typing syntax.

*   **"Code: The Hidden Language of Computer Hardware and Software" by Charles Petzold**
    *   **Best for:** Anyone curious about how technology works on a fundamental level.
    *   **Why read it:** This is a masterpiece. It doesn't teach you a specific coding language; instead, it explains how we went from flashlights, Morse code, and electricity to smart devices and the internet. It demystifies the relationship between hardware and software.
    *   **Focus:** Computer Science concepts.

---

### 4. For Learning "How to Think" Like a Coder
Coding is 10% typing syntax and 90% problem-solving. These books help you develop the logical mindset required for programming.

*   **"Think Like a Programmer" by V. Anton Spraul**
    *   **Best for:** People who get stuck when trying to solve coding challenges on their own.
    *   **Why read it:** Many beginners learn syntax but don't know how to apply it to solve a problem. This book teaches you how to split problems into smaller parts, write "pseudocode," and think creatively to find solutions.
    *   **Focus:** Problem-solving logic (examples are in C++, but the lessons apply to all languages).

---

### 5. The "Next Step" (For transitioning to a professional)
Once you know the basics and want to learn how to write *good* code in a professional environment.

*   **"The Pragmatic Programmer" by Andrew Hunt and David Thomas**
    *   **Best for:** Intermediate learners and aspiring software engineers.
    *   **Why read it:** This is widely considered one of the most important programming books ever written. It doesn’t teach you how to code; it teaches you how to be a *software craftsman*. It covers topics like career development, personal responsibility, keeping code flexible, and working in teams.

---

### Recommendation on where to start:
If you want to **generalize/do data/automate tasks**, buy **"Python Crash Course."**
If you want to **build websites**, buy **"HTML and CSS"** by Jon Duckett. */

//new output w/stop sequence \n -> 
/* 
Learning to code is an exciting journey, but the right book depends heavily on your starting point, your learning style, and what you want to build (e.g., websites, automation scripts, or games).  */