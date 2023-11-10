const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Post = sequelize.define('posts', {
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
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
});

module.exports = Post;
