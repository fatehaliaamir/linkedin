const Sequelize = require('sequelize');

const User = require('../models/user');
const Comment = require('../models/comment'); // Import the Comment model
const Reaction = require('../models/reaction'); // Import the Reaction model
const sequelize = require('../utils/database');

const Post = sequelize.define('posts', {
  post_id: {                //id of the post
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_id: {                //user who posted
      type: Sequelize.INTEGER,
      allowNull: false
  },
  content: Sequelize.STRING,//content of the post (caption)
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
});

// Define the association
//Post.belongsTo(User, { foreignKey: 'user_id' }); // user_id is the foreign key linking to User
Post.hasMany(Comment, { foreignKey: 'post_id' });
Post.hasMany(Reaction, { foreignKey: 'post_id' });


module.exports = Post;
