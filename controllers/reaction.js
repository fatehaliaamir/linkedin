const Reaction = require('../models/reaction');

exports.getReactions = async (req, res) => {
    try {
      // Use Sequelize to fetch all reactions from the 'Reaction' model
      const reactions = await Reaction.findAll(); // Replace with actual model name and attributes
      console.log(reactions);
      res.json(reactions);
    } catch (error) {
      console.error('Error fetching reactions:', error);
      res.status(500).json({ error: 'An error occurred while fetching reactions.' });
    }
  };

  exports.postAddReaction = async (req, res) => {
    // Extract the reaction data from the request body
    const user_id = req.body.user_id; 
    const post_id = req.body.post_id; 
    const type_of = req.body.type_of; // Assuming userId and content are part of the request body
    
    console.log(user_id, post_id, type_of)

    try {
      // Use Sequelize to create a new reaction record in the 'Reaction' model
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
    const reaction_id = req.body.reaction_id; // Assuming you send the reaction ID in the request body
  
    try {
      // Use Sequelize to delete the reaction from the 'Reaction' model
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