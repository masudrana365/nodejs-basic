const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url =="/"){
        res.write("server is running");
        res.end();
    }
    else if(req.url =="/about"){
        res.write("This is about us");
        res.end();
    }
    else{
        res.write("Not found");
        res.end();
    }
});
server.listen(3000);

console.log("port 3000 active");