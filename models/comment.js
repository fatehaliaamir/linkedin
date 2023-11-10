const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Comment = sequelize.define('comments', {
  comment_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  content: Sequelize.STRING,
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

Comment.belongsTo(Comment, {
  foreignKey: 'parent_id',
  as: 'parentComment'
});

Comment.hasMany(Comment, {
  foreignKey: 'parent_id',
  as: 'replies'
});

module.exports = Comment;
