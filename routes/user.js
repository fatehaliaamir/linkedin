const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

//login - authenticaion
router.get('/login', userController.loginUser);

//sign up - user crud
router.get('/users', userController.getUser);

router.get('/users/sign-up', userController.getAddUser);

router.post('/users/sign-up', userController.postAddUser);

router.post('/users/delete-user', userController.postDeleteUser);

module.exports = router;

