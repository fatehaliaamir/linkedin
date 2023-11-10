const Comment = require('../models/comment');

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'An error occurred while fetching comments.' });
  }
};

exports.postAddComment = async (req, res) => {
  const content = req.body.content;
  const post_id = req.body.post_id;
  const user_id = req.body.user_id;

  try {
    const newComment = await Comment.create({
      content,
      post_id,
      user_id,
    });

    res.send('Comment successfully added');
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ error: 'An error occurred while adding the comment.' });
  }
};

exports.postDeleteComment = async (req, res) => {
  const comment_id = req.body.comment_id;

  try {
    const deletedComment = await Comment.destroy({
      where: { comment_id: comment_id },
    });

    if (deletedComment) {
      res.send(`Comment with ID ${comment_id} deleted`);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'An error occurred while deleting the comment.' });
  }
};
