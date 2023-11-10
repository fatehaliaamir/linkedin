const path = require('path');

const express = require('express');

const reactionController = require('../controllers/reaction');

const router = express.Router();

//reaction crud
router.get('/posts/reactions', reactionController.getReactions);

router.get('/posts/reactions/add-reaction', reactionController.getAddReaction);

router.post('/posts/reactions/add-reaction', reactionController.postAddReaction);

router.post('/posts/reactions/delete-reaction', reactionController.postDeleteReaction);

module.exports = router;