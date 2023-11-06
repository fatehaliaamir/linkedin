const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Connection = sequelize.define('connection', {
    conn_id: {                //id of this connection
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {                //the person sending the request
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    conn_user_id: {           //the person we're connecting to
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    status: Sequelize.STRING  //connected or pending
});

module.exports = Connection;