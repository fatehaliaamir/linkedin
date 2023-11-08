const { Sequelize, NOW } = require('sequelize');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const secretKey = 'e9k6R#pG2tY^wBz$L&nN8fA!dH'; // Replace with a strong secret key

exports.loginUser = async (req, res) => {
    const username = req.body.username; // Access the username from the request body
    const password = req.body.password; // Access the password from the request body
  
    try {
      const user = await User.findOne({ where: { username } });
  
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Create a JWT containing user information (e.g., user_id)
        const token = jwt.sign({ user_id: user.id }, secretKey, { expiresIn: '1h' });

        res.json({ token });
  
      // If username and password are correct, send a success response
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
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const updatedAt = NOW();

    console.log(username, email, password);

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

  
  