const { User } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'No user with this ID' });
      }

      res.json(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });

      if (!deletedUser) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createFriend: async function(username, email) {
    try {
      const friend = await User.create({ username, email });
      console.log('Friend created:', friend);
    } catch (err) {
      console.error('Error creating friend:', err);
    }
  },

  async deleteFriends(req, res) {
    try {
      const deletedFriend = await User.findOneAndDelete({ _id: req.params.userId });
  
      if (!deletedFriend) {
        return res.status(404).json({ message: 'No friend with that ID' });
      }
  
      res.json({ message: 'Friend deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
