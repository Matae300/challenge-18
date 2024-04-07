const connection = require('../Config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts, getRandomUsers } = require('./data');

console.time('seeding');

connection.once('open', async () => {

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }


  const users = getRandomUsers(3, users); 
  const thoughts = getRandomThoughts(3, users, thoughts); 

  try {
    await User.insertMany(users);
    await Thought.insertMany(thoughts);
    console.log('Seeding complete 🌱');
  } catch (error) {
    console.error('Error seeding data:', error);
  }

  console.timeEnd('seeding');
  process.exit(0);
});