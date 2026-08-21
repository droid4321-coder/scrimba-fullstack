//we import http from node
//import http from "node:http";
//Global variables in node.js past and present
//if we run this without specifying tha tthe node file is a type of module, it will return an error. In commonJS this does not work as expected.

//If we wanted to make it work in commonJS, it needs the require keyword like this:
//require this is used by commonJS
//const http = require("http");

//we have access to global variables like __dirname so we can log them out
//console.log(__dirname);
//console.log(__filename);

//common js is more focused on nodejs specific modules while es modules focus more on copatibility on the JS ecosystem

//this is before v20 of node.js es modules
import path from "node:path";
import url from "node:url"

//double underscores indicate global variables
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__filename);
console.log(__dirname);

//logging out path direction via import.meta from version 20 of node.js or later on es modules
//console.log(import.meta.dirname);
//console.log(import.meta.filename);

//this is important because we will see this in code bases and its good to know various methos of achieving the same.