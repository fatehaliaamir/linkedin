const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Post = sequelize.define('post', {
    post_id: {                //id of the post
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {                //user who posted
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: Sequelize.STRING,//content of the post (caption)
    create_at: {              //date of which it was created
        type: Sequelize.DATE,
        allowNull: false
    },
});

module.exports = Post;
