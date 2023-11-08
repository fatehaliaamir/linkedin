const Post = require('../models/post');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'An error occurred while fetching posts.' });
  }
};

exports.postAddPost = async (req, res) => {
  const content = req.body.content;
  const user_id = req.body.user_id;

  try {
    const newPost = await Post.create({
      user_id,
      content
    });

    res.send('Post successfully added');
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ error: 'An error occurred while adding the post.' });
  }
};

exports.getOnePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'An error occurred while fetching the post.' });
  }
};

exports.postEditPost = async (req, res) => {
  const postId = req.params.postId;
  const { title, content } = req.body;

  try {
    const [rowsUpdated, [updatedPost]] = await Post.update(
      { title, content },
      {
        where: { id: postId },
        returning: true
      }
    );

    if (rowsUpdated === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error('Error editing post:', error);
    res.status(500).json({ error: 'An error occurred while editing the post.' });
  }
};

exports.postDeletePost = async (req, res) => {
  const post_id = req.body.post_id;

  try {
    const deletedPost = await Post.destroy({
      where: { post_id: post_id },
    });

    if (deletedPost) {
      res.send(`Post with ID ${post_id} deleted`);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'An error occurred while deleting the post.' });
  }
};
