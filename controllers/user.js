const { Sequelize } = require('sequelize');
const User = require('../models/user');

exports.loginUser = async (req, res) => {
  res.send('Login page');
  const username = req.body;
  const password = req.body;

  //username = "John";
  //password = "1234";

  //res.send(username, password)

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {    
      return res.status(401).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.send('Login successful');
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'password', 'createdAt', 'updatedAt'],
    });

    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'An error occurred while fetching the user.' });
  }
};

exports.postAddUser = async (req, res) => {
  const username = req.body;
  const email = req.body;
  const password = req.body;

  try {
    const newUser = await User.create({
      username,
      email,
      password
    });

    res.send('User successfully added');
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'An error occurred while adding the user.' });
  }
};

exports.postDeleteUser = async (req, res) => {
  const userId = req.body.userId;

  try {
    const deletedUser = await User.destroy({
      where: { id: userId },
    });

    if (deletedUser) {
      res.send(`User with ID ${userId} deleted`);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};

  
  