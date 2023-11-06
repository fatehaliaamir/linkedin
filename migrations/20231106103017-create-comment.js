'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      comment_id: {             //specific id of the comment
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      post_id: {                //post on which comment is made
          type: Sequelize.INTEGER,
          allowNull: false
      },
      user_id: {                //user who commented
          type: Sequelize.INTEGER,
          allowNull: false
      },
      content: Sequelize.STRING,//content of the comment
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
    await queryInterface.dropTable('comments');
  }
};