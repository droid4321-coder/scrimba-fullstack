import http from "node:http";
import { handleFiles } from "./handleFiles.js";
import { getTemp } from "./getTemp.js";

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {

    if (!req.url.startsWith("/temp/live")) {
        return await handleFiles(req, res, "public");
    } else if (req.url === "/temp/live") {
        //server side events here
        res.statusCode = 200;

        //this enables us to set an event based header and connection
        res.setHeader("Content-Type", "text/event-stream")

        //no cache so it renders live things appropiately, if cached it will fail because it will save data and wont delete
        res.setHeader("Cache-Control", "no-cache")

        //This is done to keep the connection alive
        res.setHeader("Connection", "keep-alive")

        //set interval to make it generate on certain number of seconds
        setInterval(() => {
            const temperature = getTemp()
            //we use the res.write because if we use res.end it ends the connection. res.write keeps it alive.
            res.write(
                `data: ${JSON.stringify({
                    event: "temp-updated",
                    temp: temperature
                })}\n\n` //these \n\n is required by the protocol to signalize the connection ends of a complete message block. It will not work if this is not implemented
            )
        }, 2000)
    }
})

server.listen(8000, () => console.log("listening on port 8000"))