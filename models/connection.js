const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Conn = sequelize.define('connections', {
  conn_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  conn_user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: Sequelize.STRING,
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

module.exports = Conn;
