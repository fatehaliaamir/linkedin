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
  const { title, content, userId } = req.body;

  try {
    const newPost = await Post.create({
      title,
      content,
      userId,
    });

    res.send('Post successfully added');
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ error: 'An error occurred while adding the post.' });
  }
};

exports.postEditPost = async (req, res) => {
  const postId = req.params.postId;
  const { title, content } = req.body;

  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.title = title;
    post.content = content;

    await post.save();

    res.send('Post successfully updated');
  } catch (error) {
    console.error('Error editing post:', error);
    res.status(500).json({ error: 'An error occurred while editing the post.' });
  }
};

exports.postDeletePost = (req, res) => {
  const postId = req.body.postId;
  res.send(`Post with ID ${postId} deleted`);
};
