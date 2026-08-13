import http from "node:http";

const PORT = 8000;

//gets directory
const __dirname = import.meta.dirname

console.log(import.meta.dirname);

const server = http.createServer((req, res) => {
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
*/