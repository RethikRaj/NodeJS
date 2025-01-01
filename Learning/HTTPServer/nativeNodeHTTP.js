const http = require("http");

// Creating a server.
const server = http.createServer((req,res)=>{
    if(req.url === "/getSecretData"){
        res.end("Secret Data");
    }
    res.end("Hello World From Server");
})

// Making the server listen to incoming requests.
server.listen(3002);