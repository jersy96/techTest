'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('persons', [
      {
        name: 'Kanye West',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        imageUrl: 'https://i.ibb.co/vkStpMp/Kayne-West.png',
        thumbsUp: 64,
        thumbsDown: 36,
        timeAgoInMonths: 1,
        category: 'entertainment'
      },
      {
        name: 'Mark Zuckerberg',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        imageUrl: 'https://i.ibb.co/0XcgMJY/Mark-1X.png',
        thumbsUp: 36,
        thumbsDown: 64,
        timeAgoInMonths: 1,
        category: 'business'
      },
      {
        name: 'Cristina Fernández de Kirchner',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        imageUrl: 'https://i.ibb.co/bvwvv5H/Layer-12-1-X.png',
        thumbsUp: 36,
        thumbsDown: 64,
        timeAgoInMonths: 1,
        category: 'politics'
      },
      {
        name: 'Malala Yousafzai',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        imageUrl: 'https://i.ibb.co/rv3yQcp/Layer-14-1-X.png',
        thumbsUp: 64,
        thumbsDown: 36,
        timeAgoInMonths: 1,
        category: 'entertainment'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('persons', null, {});
  }
};



