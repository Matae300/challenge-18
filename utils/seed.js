const connection = require('../Config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts, getRandomUsers } = require('./data');

connection.on('error', (err) => console.error('MongoDB connection error:', err));

connection.once('open', async () => {
  try {
    const thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    const userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    // Generate 5 random users
    const users = getRandomUsers(5);
    // Generate 10 thoughts associated with these users
    const thoughts = getRandomThoughts(10, users);

    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    process.exit(0);
  }
});
