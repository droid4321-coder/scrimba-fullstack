import path from "node:path"
import fs from "node:fs/promises"
import { getContentType } from "./getContentType.js";

const __dirname = import.meta.dirname;

export async function handleFiles(req, res, baseDir) {
    const publicDir = path.join(__dirname, baseDir)
    const pathToResource = path.join(publicDir, req.url === "/" ? "index.html" : req.url)
    const content = await fs.readFile(pathToResource);
    const ext = path.extname(pathToResource);
    const contentType = getContentType(ext);

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.end(content);
}