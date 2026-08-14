import http from "node:http";
import path from "node:path";
import { testPath } from "./utils/testPath.js";

const PORT = 8000;

//gets directory tht is holding the server.js file
const __dirname = import.meta.dirname

//console.log(import.meta.dirname);

//access CWD to see where node deplys from 
//console.log("CWD", process.cwd());

const server = http.createServer((req, res) => {
    
    //joins path file segments into one string to make it safe
    const absPathToResource = path.join(__dirname, "public", "index.html")
    const relPathToResource = path.join("public", "index.html")
    console.log("absolute: " + absPathToResource);
    console.log("relative: " + relPathToResource);
    testPath();
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end()
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

/* How to serve pages via node? 

We need to identofy what resources the client wants to read and serve data,
identify the path to the resource
we need the modules directory - import.meta
and we need the path to the resource from that directory with the path module
read the resources using rhe fs module, and send those resources to the client

we need to see the filepath with our os. And we need an agnostic os solution, so it runs on every os. A dynamic way to get the directory

for that we use import.meta, which is an object specific to the modular JS environment, which provides matadata about the current module.

in old school node, you can use __dirname and it gives you the directory, but now we can user import.meta.dirname and it returns the actual directory of your node file

we run into a problem, but we will use a tool to get thru that obstacle, the path module

CWD - current working directory is the folder you're in when you run your Node.js app, typically with a command like node server.js

Paths we see in projects:

Absolute path - Shows the full location of a file or folder on the system where your code is running. On a laptop or remote server.
They are always the same no matter when you run you main scripr, and independent of the CWD
Example - /users/jane/my-app/public/index.html

Relative paths - these are relative to the file it appears in, often includes the . (current folder) or .. (up one folder)
This is often seen in import statements like import { serveStatic } from "./utils/srveStatic.js"

Relative paths created from path module start from the CWD and affected by changes to the CWD and that means that they are not as safe. but sometimes more flexible.

the path module joins path elements to create one path (absolute or relative) whih will work on any supoorted OS

Also can be used to extract filenames and extensions
*/