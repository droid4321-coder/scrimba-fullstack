/* 

    We are going to deal with queries

*/

import http from "node:http"
import { url } from "node:inspector";

const server = http.createServer((req, res) => {

    //new keyword for URL constructor, first param is the url, and the relative url. It needs the base url first on the second param., then req.headers.host
    //we need to get this item dynamically because if the host changes it will break the object. This way by adding the req.headers.host, it chages dynamically
    //we take a look at the search parameters object and it has these => arrows. we will use it for our queries
    //in vanilla node we do this, but in express.js its more simple
    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams)

    //console.log(urlObj);
    console.log(queryObj);

    //console.log(req.headers); //object that holds all incoming request headers as key value pairs. Host is one that defines the localhost
    console.log(req.url);


})

server.listen(8000, () => console.log("Server listening on port 8000"));