const users = [
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  },
  {
    "username": "codingwizard",
    "email": "codingwizard@example.com"
  },
  {
    "username": "webdevpro",
    "email": "webdevpro@hotmail.com"
  }
];

const thoughts = [
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  },
  {
    "thoughtText": "Another interesting thought...",
    "username": "codingwizard",
    "userId": "5edff358a0fcb779aa7b118b"
  },
  {
    "thoughtText": "Coding is fun!",
    "username": "webdevpro",
    "userId": "5edff358a0fcb779aa7b118c"
  }
];


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];


const getRandomThoughts = (count, thoughts) => {
  const results = [];
  for (let i = 0; i < count; i++) {
    const thought = getRandomArrItem(thoughts);
    results.push({
      thoughtText: thought.thoughtText,
      username: thought.username,
      userId: thought.userId, 
    });
  }
  return results;
};


const getRandomUsers = (count, users) => {
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
  getRandomUsers
};