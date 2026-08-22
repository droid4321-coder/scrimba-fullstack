import http from "node:http"
import path from "node:path"
import { serveStatic } from "./utils/serveStatic.js";
import { getContentType } from "./utils/getContentType.js";
import { getData } from "./utils/getData.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

//console.log(await getData("data.json"));

const server = http.createServer((req, res) => {
    //we use text/html to send html content to the client from the server

    serveStatic(req, res, __dirname);
    //res.statusCode = 200;
    //res.setHeader("Content-Type", "text/html");
    ////res.end(`<html><h1>The server is working!</h1></html>`);
    //res.end();
})

server.listen(PORT, () =>  console.log(`Server listening on port ${PORT}`) );