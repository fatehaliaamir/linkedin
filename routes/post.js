const path = require('path');

const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

//posting crud
router.get('/posts', postController.getPosts);

router.post('/posts/add-post', postController.postAddPost);

router.post('/posts/delete-post', postController.postDeletePost);

module.exports = router;