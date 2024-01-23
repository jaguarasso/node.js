const express = require("express");
const app =  express();

app.get("/", function(req, res){
    res.send("seja bem-vindo ao meu app")
})

app.get("/sobre", function(req, res){
    res.send("minha pagina sobre")
})

app.get("/blog", function(req,res){
    res.send("meu blog sobre")
})

app.get("/ola/:nome/:cargo", function(req, res){//o send so pode ser enviado uma unica vez dentro de uma rota
    res.send("<h1> ola "+req.params.nome +"</h1>"+
    "<h2> seu cargo é: "+req.params.cargo +"</h2>")
   // res.send("<h2> seu cargo é: "+req.params.cargo +"</h2>")
})

app.listen(8087);//tem que sempre ser a ultima linha do codigo main