const { Thought, Reaction } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;

    try {
      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        return res.status(404).json({ message: 'No thought found' });
      }

      thought.reactions.push({ reactionBody, username });
      await thought.save();

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    const { thoughtId } = req.params;

    try {
      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        return res.status(404).json({ message: 'No thought found' });
      }

      const deletedReaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId });

      if (!deletedReaction) {
        return res.status(404).json({ message: 'Reaction not found' });
      }

      res.json({ message: 'Reaction deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },
};
