const Comment = require('../models/comment');

exports.getComments = async (req, res) => {
    try {
      // Use Sequelize to fetch all comments from the 'Comment' model
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
    const user_id = req.body.user_id; // Assuming comment data is sent in the request body
  
    try {
      // Use Sequelize to create a new comment record in the 'Comment' model
      const newComment = await Comment.create({
        content,
        post_id, // Assuming postId corresponds to the post the comment is related to
        user_id, // Assuming userId corresponds to the user who made the comment
      });
  
      res.send('Comment successfully added');
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'An error occurred while adding the comment.' });
    }
  };

  exports.postDeleteComment = async (req, res) => {
    const comment_id = req.body.comment_id; // Assuming you send the comment ID in the request body
  
    try {
      // Use Sequelize to delete the comment from the 'Comment' model
      const deletedComment = await Comment.destroy({
        where: { comment_id: comment_id }, // Assuming the comment ID corresponds to the 'id' field in your Comment model
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