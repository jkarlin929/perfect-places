const { Place } = require('./models');


async function seed() {
  await Place.bulkCreate([
    {
      location: 'Niagara Falls, Canada',
      description: 'One of the greatest natural wonders.',
      visited: true,
      date_visited: '4/10/2008'
    },
    {
      location: 'Tel Aviv, Israel',
      description: 'A beautiful Mediterranean city',
      visited: true,
      date_visited: '6/12/2011'
    },
    {
      location: 'San Francisco, California',
      description: 'Urban Californian City',
      visited: false,
      date_visited: 'N/A'
    }
  ]);
  process.exit();
}

seed();
