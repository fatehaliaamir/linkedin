const Reaction = require('../models/reaction');

exports.getReactions = async (req, res) => {
  try {
    const reactions = await Reaction.findAll();
    console.log(reactions);
    res.json(reactions);
  } catch (error) {
    console.error('Error fetching reactions:', error);
    res.status(500).json({ error: 'An error occurred while fetching reactions.' });
  }
};

exports.postAddReaction = async (req, res) => {
  const user_id = req.body.user_id;
  const post_id = req.body.post_id;
  const type_of = req.body.type_of;
  
  console.log(user_id, post_id, type_of);

  try {
    const newReaction = await Reaction.create({
      post_id,
      user_id,
      type_of
    });

    res.send('Reaction successfully added');
  } catch (error) {
    console.error('Error adding reaction:', error);
    res.status(500).json({ error: 'An error occurred while adding the reaction.' });
  }
};

exports.postDeleteReaction = async (req, res) => {
  const reaction_id = req.body.reaction_id;

  try {
    const deletedReaction = await Reaction.destroy({
      where: { reaction_id: reaction_id },
    });

    if (deletedReaction) {
      res.send(`Reaction with ID ${reaction_id} deleted`);
    } else {
      res.status(404).json({ error: 'Reaction not found' });
    }
  } catch (error) {
    console.error('Error deleting reaction:', error);
    res.status(500).json({ error: 'An error occurred while deleting the reaction.' });
  }
};
