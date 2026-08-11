import http from "node:http"
import { getDataFromDB } from "./database/db.js";
import { sendJSONResponse } from "./utils/sendJSONResponse.js";
import { getDataByPathParams } from "./utils/getDataByPathParams.js";

const PORT = 8000;



const server = http.createServer(async (req, res) => {
    console.log(req.url, req.method);

    const destinations = await getDataFromDB();

    if (req.url === "/api" && req.method === "GET") {
        sendJSONResponse(res, 200, destinations)
    } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
        const filteredData = getDataByPathParams(destinations, "continent", req.url.split("/").pop());
        sendJSONResponse(res, 200, filteredData)
    }  else if (req.url.startsWith("/api/country") && req.method === "GET") { 
        const filteredData = getDataByPathParams(destinations, "country", req.url.split("/").pop());
        sendJSONResponse(res, 200, filteredData)
    } else {
        sendJSONResponse(res, 404, {
            error: "Not found",
            message: "The requested route does not exist. Please try accessing localhost:8000/api"
        })
    }
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))