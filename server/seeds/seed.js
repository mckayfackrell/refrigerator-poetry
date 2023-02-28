const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});

  const userData = [
    { username: 'jen27364', email: 'jen@test.com', password: 'pass1234'},
    { username: 'ben27364', email: 'ben@test.com', password: 'pass3333'},
    { username: 'kenna27364', email: 'kenna@test.com', password: 'pass5555'},
    { username: 'mckay27364', email: 'mckay@test.com', password: 'pass7777'}
  ]

  const userSeed = await User.insertMany(userData);

  console.log('Users seeded!');
  process.exit(0);
});
