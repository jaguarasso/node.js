var http = require('http')

http.createServer(function(req, res){
    res.end("ola")
}).listen(8087);

console.log("o servidor esta rodando")