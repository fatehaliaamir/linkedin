const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Reaction = sequelize.define('reaction', {
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
    create_at: {              //date of which it was created
        type: Sequelize.DATE,
        allowNull: false
      },
});

module.exports = Reaction;
