const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Reaction = sequelize.define('reactions', {
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

module.exports = Reaction;