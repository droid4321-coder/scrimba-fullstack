//importing modules from nodejs
//we need to ser type module in package.json

import http from "node:http" //its good practice to import a core module and we are telling node its not our own module
//older courses
//require("http")

//specifying port
const PORT = 8000;

/* This allows node to transfer data through the HTTP protocol, create servers, handle requests from clients and provide responses

    The response object has methods that allow us to ecify content type set sestus codes, and provide content.
    The end method can take methods, the data, the enconding and the callback function. It is the final stuff sent from the server
    You can user res.write to send stuff from server to client. We need to do res.end() to signify end of signal sent.

    The request response cycle we start a client that does a request to the server and the server returns a response back.
    The computer is the client and over http it sends a request with a maethod, like GET, it tells us the path, and other data.
    This request goes to the server which handles the request, by filtering data, or throwing an error if something is wrong. Eventually, it will send the response to the client by http.
    The response willcontain the response the content type and status code and message. Thats the cycle
    */

const server = http.createServer((req, res) => {
    res.write("This is some data!")
    res.end("Hello from the server") // sends data over http and ends the response
}) // this creates an http server{} it takes 2 parameters, req (request) and res (response) into a callback function

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

//rudimentary server, but works
//it aint much but its honest