const Sequelize = require('sequelize');

const Post = require('../models/post');
const sequelize = require('../utils/database');

const Comment = sequelize.define('comments', {
  comment_id: {             //specific id of the comment
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  post_id: {                //post on which reacted is made
      type: Sequelize.INTEGER,
      allowNull: false
    },
  user_id: {                //user who reacted
      type: Sequelize.INTEGER,
      allowNull: false
    },
  content: Sequelize.STRING,//type of the reaction
  parent_id: Sequelize.INTEGER,
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

// Define associations
//Comment.belongsTo(Post, { foreignKey: 'post_id' });

Comment.belongsTo(Comment, {
  foreignKey: 'parent_id',
  as: 'parentComment', // Alias for the association
});

Comment.hasMany(Comment, {
  foreignKey: 'parent_id',
  as: 'replies', // Alias for the association
});

module.exports = Comment;