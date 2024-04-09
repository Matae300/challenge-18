const users = [
  {
    username: 'lernantino',
    email: 'lernantino@gmail.com',
  },
  {
    username: 'codingwizard',
    email: 'codingwizard@example.com',
  },
  {
    username: 'webdevpro',
    email: 'webdevpro@hotmail.com',
  },
];

const thoughts = [
  {
    thoughtText: "Here's a cool thought...",
    username: 'lernantino',
  },
  {
    thoughtText: 'Another interesting thought...',
    username: 'codingwizard',
  },
  {
    thoughtText: 'Coding is fun!',
    username: 'webdevpro',
  },
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomThoughts = (count, users) => {
  const results = [];
  for (let i = 0; i < count; i++) {
    const user = getRandomArrItem(users);
    results.push({
      thoughtText: getRandomArrItem(thoughts).thoughtText,
      username: user.username,
    });
  }
  return results;
};

const getRandomUsers = (count) => {
  const results = [];
  for (let i = 0; i < count; i++) {
    const user = getRandomArrItem(users);
    results.push({
      username: user.username,
      email: user.email,
    });
  }
  return results;
};

module.exports = {
  getRandomThoughts,
  getRandomUsers,
};
