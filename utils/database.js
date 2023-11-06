const Sequelize = require('sequelize');

const sequelize = new Sequelize('linkedin', 'root', 'Haider@123', {
    dialect: 'mysql',
    host: 'localhost'
  });

module.exports = sequelize;
