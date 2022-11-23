const connection = require('../config/connection');
const { Course, Friend } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Course.deleteMany({});

  // Drop existing friends
  await Friend.deleteMany({});

  // Create empty array to hold the friends
  const friends = [];

  // Loop 20 times -- add friends to the friends array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thought = getRandomThoughts(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const email = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    friends.push({
      first,
      last,
      email,
      thought,
    });
  }

  // Add friends to the collection and await the results
  await Friend.collection.insertMany(friends);

  // Add courses to the collection and await the results
  await Course.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    friends: [...friends],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(friends);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
