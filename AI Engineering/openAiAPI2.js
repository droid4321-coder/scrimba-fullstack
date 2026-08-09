import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Dynamically finds the exact folder this file is running from
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly loads the .env file from this exact folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

import OpenAI from "openai";

//API call instance and model

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        //tells the system how to behave
        role: "system",
        content: "You are a helpful general knowledge expert"
    },
    {
        //tells the system thr prompt a task to be completed
        role: "user",
        content: "Who invented the television?"
    }
]

const response = await openai.chat.completions.create({ //this creates the chat completion response for the api
    model: "gpt-4o-mini",
    messages: messages
})

//console.log(response);

//get the answer
console.log(response.choices[0].message.content);

//when system role is deleted, often it will return a similar answer

//the output in lesson 8 looks like it asked for a poem about TV and its content, it was a rap about television

const obj = {role: "assistant", content: "This is the content that AI puts. Unfortunately, I dont have billing enabled and cant use it, so this will do!"}

//models and snapshots

//the model is the type that e use in the Ai, and the snapshot is the evolution number of that AI.
//in the docs are the previous snapshots we can consult as refernce. You can rollback a previous snapshot or use a future one

//some models have a k is the context length, how many tokens a model can handle, the higher the more

//knowledge cutoff date, it is a training date that tells us up to what date it is trained. You cant give it future date questions because it wont know, it might predict, but not facts.

//memory - models do not have memory

//prompt engineering is the art or science of designing inputs for generative AI tools like gpt-4 to produce optimal outputs