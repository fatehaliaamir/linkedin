const path = require('path');

const express = require('express');

const commentController = require('../controllers/comment');

const router = express.Router();

//commenting crud
router.get('/posts/comments', commentController.getComments);

router.get('/posts/comments/add-comment', commentController.getAddComment);

router.post('/posts/comments/add-comment', commentController.postAddComment);

router.post('/posts/comments/delete-comment', commentController.postDeleteComment);

module.exports = router;