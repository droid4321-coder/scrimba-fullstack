import http from "node:http"
import { getDataFromDB } from "./database/db.js";

const PORT = 8000;



const server = http.createServer(async (req, res) => {
    console.log(req.url, req.method);

    const destinations = await getDataFromDB();

    if (req.url === "/api" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json"); //we are setting up the headers on the response, first is the content type and then the type of content
        res.statusCode = 200 // return a response code of 200, succesful
        res.end(JSON.stringify(destinations))
    } else if (req.url.startsWith("/api/continent")) {
        
    } else {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 404
        res.end(JSON.stringify({
            error: "Not found",
            message: "The requested route does not exist. Please try accessing localhost:8000/api"
        }))
    }
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))