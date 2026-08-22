import path from "node:path"
import fs from "node:fs/promises"

const __dirname = import.meta.dirname;

export async function getData(data) {
    try {
        const filePath = path.join(__dirname, "..", "data", data);
        //by being utf 8 it returns it as a string without needing JSON.stringify
        const content = await fs.readFile(filePath, "utf-8");
        return JSON.parse(content)
    } catch (error) {
        console.log("An error has ocurred. ", error);
        return [];
        //why we return an empty array? This handles an error gracefully instead of returning null or undefined
    } finally {
        console.log("Data procedure finished!");
    }
}

//const result = await getData("data.json");
//console.log(result);

//we are seding the data as an JS object because we need to futureproof the app to accept POST requests. As we cant manip the JSON string, we need the JSON object. 