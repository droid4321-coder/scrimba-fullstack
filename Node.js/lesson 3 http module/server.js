//importing modules from nodejs
//we need to ser type module in package.json

import http from "node:http" //its good practice to import a core module and we are telling node its not our own module
//older courses
//require("http")

//specifying port
const PORT = 8000;

/* This allows node to transfer data through the HTTP protocol, create servers, handle requests from clients and provide responses*/

const server = http.createServer((req, res) => {
    res.end("Hello from the server") // sends data over http and ends the response
}) // this creates an http server{} it takes 2 parameters, req (request) and res (response) into a callback function

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

//rudimentary server, but works
//it aint much but its honest