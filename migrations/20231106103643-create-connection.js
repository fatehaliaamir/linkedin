'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('connections', {
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
      status: Sequelize.STRING,  //connected or pending
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('connections');
  }
};