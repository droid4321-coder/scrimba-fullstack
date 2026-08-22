import fs from "node:fs/promises"
import path from "node:path"
import { getData } from "./getData.js";

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, "..", "data", "data.json")

export async function addNewSighting(newSighting) {
    try {
        const content = await getData("data.json")
        //console.log(content);
        content.push(newSighting)
        //console.log(content);
        await fs.writeFile(filePath,
            JSON.stringify(content, null, 2), //the 2 will prettify json
            "utf8");
    } catch (error) {
        throw new Error(error);
    }
}