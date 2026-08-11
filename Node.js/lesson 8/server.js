import http from "node:http"

const PORT = 8000;

const animal = {
    type: "elephant",
    nickname: "Dumbo"
}

//stringifies JSON example
console.log(JSON.stringify(animal));

const server = http.createServer((req, res) => {
    res.end("this is from the server");
})

server.listen(PORT, () => console.log(`listening on port ${PORT}`));