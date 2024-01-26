const db = require('./db')

const Post = db.sequelize.define('postagens', {

    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post
//execute esse comando so uma vez para criar a table
//Post.sync({force: true}) 