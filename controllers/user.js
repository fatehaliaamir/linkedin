const User = require('../models/user');

exports.loginUser = (req, res) => {
  //logic
  res.send('Login page'); 
};

exports.getUser = (req, res) => {
    const users = ['User 1', 'User 2', 'User 3']; 
    res.json(users);
  };

  exports.getAddUser = (req, res) => {
    // Your logic 
    res.send('User signup form'); 
  };
  
exports.postAddUser = (req, res) => {
    // Your logic 
    const newUser = req.body;
    // Process and save the user data
    res.send('User successfully added'); // Replace with your actual response
  };
  
exports.postDeleteUser = (req, res) => {
    const userId = req.body.userId; // Assuming you send the user ID in the request body
    // Your logic to delete the user, e.g., from a database
    res.send(`User with ID ${userId} deleted`); // Replace with your actual response
  };
  
  