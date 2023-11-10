const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Comment = require('../models/comment')
const Reaction = require('../models/reaction')

const Post = sequelize.define('posts', {
  post_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  content: Sequelize.STRING,
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

Post.hasMany(Comment, { foreignKey: 'post_id' });
Post.hasMany(Reaction, { foreignKey: 'post_id' });

module.exports = Post;
