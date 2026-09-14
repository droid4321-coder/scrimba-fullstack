import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
})

export async function aiResponse(ingredientsArr) {
    try {

        const ingredientsString = ingredientsArr.join(", ")
        
        const userInstruction = `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`

        const systemInstruction = `
        You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: userInstruction,
            config: {
                systemInstruction: systemInstruction,
            }
        })
        console.log(`AI file response: ${response.text}`);
        return response.text
    } catch (error) {
        console.error(`An error has ocurred: ${error}`);
        throw error;
    } finally {
        console.log("AI function runtime complete!");
    }
}