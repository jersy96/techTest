'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'persons',
      {
        id: {
          type: Sequelize.INTEGER,
          autoincrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        imageUrl: {
          type: Sequelize.STRING
        },
        thumbsUp: {
          type: Sequelize.INTEGER,
          defaultValue: 0
        },
        thumbsDown: {
          type: Sequelize.INTEGER,
          defaultValue: 0
        },
        timeAgoInMonths: {
          type: Sequelize.INTEGER,
          defaultValue: 1
        },
        category: {
          type: Sequelize.STRING
        }
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('persons');
  }
};