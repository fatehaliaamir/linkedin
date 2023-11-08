const path = require('path');

const express = require('express');

const postController = require('../controllers/post');

const authController = require('../controllers/authenticate');

const router = express.Router();

//posting crud
router.get('/posts', authController.authenticateToken, postController.getPosts);

router.post('/posts/add-post', authController.authenticateToken, postController.postAddPost);

router.get('/posts/:postId', authController.authenticateToken, postController.getOnePost);

//router.post('/posts/edit-post'. postController.postEditPost);

router.post('/posts/delete-post', authController.authenticateToken, postController.postDeletePost);

module.exports = router;