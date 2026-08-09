import OpenAI from "openai";

/*  
    Using openRouter:
    require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1', // Maps requests to OpenRouter
  apiKey: process.env.OPENROUTER_API_KEY,  // Loads your key from .env
  defaultHeaders: {
    'HTTP-Referer': 'https://localhost:3000', // Optional: Your site URL for rankings
    'X-OpenRouter-Title': 'My Local App',     // Optional: Your app title
  }
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: 'meta-llama/llama-3-70b-instruct', // Pass any OpenRouter model string
    messages: [{ role: 'user', content: 'Hello!' }],
  });

  console.log(completion.choices[0].message.content);
}

main();


*/

const openai = new OpenAI({
    apiKey: "123456", //the api key can be put manually
    dangerouslyAllowBrowser: true // allows dangerous operations from browser
});

console.log(openai.apiKey);