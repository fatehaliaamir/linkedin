const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Comment = sequelize.define('comment', {
    comment_id: {             //specific id of the comment
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    post_id: {                //post on which comment is made
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {                //user who commented
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: Sequelize.STRING,//content of the comment
    create_at: {              //date of which it was created
        type: Sequelize.DATE,
        allowNull: false
    },
});

module.exports = Comment;
