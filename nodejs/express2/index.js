const express =  require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')



//config 

    // template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main',runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },}));
        app.set('view engine', 'handlebars')

    //body parser
        app.use(bodyParser.urlencoded({extenended: false}))
        app.use(bodyParser.json())


    // rotas
    // tipos de rotas > delet > put > pat > post > get
    
    app.get('/', function(req, res){
        
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
   }) 

    app.get('/cad', function(req, res){
     
        res.render('f1')
    })



    app.post('/add', function(req,res){
        
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(function(){
                res.redirect('/')
            }).catch(function(erro){
                res.send("houve um erro " + erro)
            })
            
       // res.send("titulo:"+req.body.titulo+" conteudo:"+req.body.conteudo)
    })
    
    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("post apagado")
        }).catch(function(erro){
            res.send("houve algum erro interno" + erro)
        })
    })

app.listen(8087, function(){
    console.log("servidor rodando na url http://localhost:8087");
});

//C:\Users\jaguara\Documents\estudos\node.js\nodejs\express2>