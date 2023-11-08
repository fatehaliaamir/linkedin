const path = require('path');

const express = require('express');

const reactionController = require('../controllers/reaction');

const router = express.Router();

//reaction crud
router.get('/reactions', reactionController.getReactions);

router.post('/reactions/add-reaction', reactionController.postAddReaction);

router.post('/reactions/delete-reaction', reactionController.postDeleteReaction);

module.exports = router;