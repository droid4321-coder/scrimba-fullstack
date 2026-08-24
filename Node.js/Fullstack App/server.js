import http from "node:http"
import path from "node:path"
import sanitizeHtml from "sanitize-html"
import { serveStatic } from "./utils/serveStatic.js";
import { getContentType } from "./utils/getContentType.js";
import { getData } from "./utils/getData.js";
import { handleGet, handlePost, handleNews } from "./handlers/routeHandlers.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

//console.log(await getData("data.json"));

const server = http.createServer(async (req, res) => {
//we use text/html to send html content to the client from the server
    
    if (req.url === "/api") {
        if (req.method === "GET") {
            return await handleGet(res, "data.json")
        }

        /* 
        To add the POST functionality we need to:
        Collect the incoming data
        parse it
        santitize it to prevent malicious code
        get out existing data
        add incoming data to existing file
        write completed data to JSON file
        */
        else if (req.method === "POST") {
            return await handlePost(req, res)
        }
    }

    else if (req.url === "/api/news") {
        handleNews(req, res);
    }

    else if (!req.url.startsWith("/api")) {
        return await serveStatic(req, res, __dirname);
    //res.statusCode = 200;
    //res.setHeader("Content-Type", "text/html");
    ///es.end(`<html><h1>The server is working!</h1></html>`);
    //res.end();
    }

})

server.listen(PORT, () =>  console.log(`Server listening on port ${PORT}`) );