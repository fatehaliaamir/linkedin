'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reactions', {
      reaction_id: {             //specific id of the comment
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
      type_of: Sequelize.STRING,//type of the reaction
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
    await queryInterface.dropTable('reactions');
  }
};