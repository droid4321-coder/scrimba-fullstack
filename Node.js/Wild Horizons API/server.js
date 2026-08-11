import http from "node:http"
import { getDataFromDB } from "./database/db.js";

const PORT = 8000;



const server = http.createServer(async (req, res) => {
    console.log(req.url, req.method);

    const destinations = await getDataFromDB();

    if (req.url === "/api" && req.method === "GET") {
        res.end(JSON.stringify(destinations))
    }
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))