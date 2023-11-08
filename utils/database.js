const Sequelize = require('sequelize');

const sequelize = new Sequelize('Linkedin_Fateh', 'root', 'Haider@123', {
    dialect: 'mysql',
    host: 'localhost'
  });

module.exports = sequelize;
