const { User } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
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
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async createFriend(req, res) {
    const { username, email } = req.body;

    try {
      if (!username || !email) {
        return res.status(400).json({ message: 'Username and email are required' });
      }
      
      const friend = await User.create({ username, email });
      res.status(201).json({ message: 'Friend created successfully', friend });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async deleteFriends(req, res) {
    try {
      const deletedFriend = await User.findOneAndDelete({ _id: req.params.friendId });
  
      if (!deletedFriend) {
        return res.status(404).json({ message: 'Friend not found' });
      }
  
      res.json({ message: 'Friend deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};
