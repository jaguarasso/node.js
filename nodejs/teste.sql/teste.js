const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'jaguarasso', {
    host: "localhost",
    dialect: 'mysql'
})

/* para testar se esta conectando com o banco de dados
sequelize.authenticate().then(function(){
    console.log("conectado")
}).catch(function(erro){
    console.log("falha ao se conectar"+erro)
})
*/


const Postagem = sequelize.define('postagens', {
    titulo:{
      type: Sequelize.STRING  
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

/* use somente para o nodemon criar a table, depois apague ou comente 
Postagem.sync({force: true})
*/

const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
/*use somente para o nodemon criar a table, depois apague ou comente 
Usuario.sync({force: true})
*/

//criando uma nova postagem

/*Postagem.create({ //para criar uma postagem
    titulo: "um titulo qualquer",
    conteudo: "um conteudo qualquer loremdasjkdakjb nkjblakd"
})*/

Usuario.create({
    nome: "thiago ",
    sobrenome: "bassete",
    idade: 22,
    email: "teset@email.com"
})