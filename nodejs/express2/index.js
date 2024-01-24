const express =  require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize =  require('sequelize')

//config 
    // template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars')
    //conexao com o banco de dados mysql
    const sequelize = new Sequelize('test', 'root', 'jaguarasso',{
        host: "localhost",
        dialect: 'mysql'
    })

    // rotas

    app.get('/cad', function(req, res){
        res.send('rota de cadastro de post')
    })
    
app.listen(8087, function(){
    console.log("servidor rodando na url http://localhost:8087");
});

//C:\Users\jaguara\Documents\estudos\node.js\nodejs\express2>