const path = require('path');

const express = require('express');

const commentController = require('../controllers/comment');

const router = express.Router();

//commenting crud
router.get('/comments', commentController.getComments);

//router.get('/comments/add-comment', commentController.getAddComment);

router.post('/comments/add-comment', commentController.postAddComment);

router.post('/comments/delete-comment', commentController.postDeleteComment);

module.exports = router;