// Import http module
const http = require('http');
// Listening port
const port  = 8000;

//Created server and handling request for get
const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.write("Hello World");
        res.end()
    }
})

server.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})