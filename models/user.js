const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Post = require('../models/post');
const Conn = require('../models/connection');

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

User.hasMany(Post, { foreignKey: 'user_id' });
User.hasMany(Conn, { foreignKey: 'user_id' });

module.exports = User;
