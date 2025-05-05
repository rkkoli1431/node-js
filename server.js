const http = require("node:http");

const server = http.createServer(function(req, res){

    if(req.url === "/getSecreteData"){
        res.end("There is no secrete data");
    }
    res.end("Hello World!");
});

server.listen(1818);