const Sequelize = require('sequelize');

const Post = require('../models/post');
const sequelize = require('../utils/database');

const User = sequelize.define('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

// Define the association
User.hasMany(Post, { foreignKey: 'user_id' }); // user_id is the foreign key in the Post model

module.exports = User;
