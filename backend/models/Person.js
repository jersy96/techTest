const sequelize = require('sequelize');
const connection = require('../db/connection');

const Sequelize = sequelize.Sequelize;

const Person = connection.connection.define('Person',
    {
        id: {
            type: Sequelize.INTEGER,
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
            type: Sequelize.INTEGER
        },
        thumbsDown: {
            type: Sequelize.INTEGER
        },
        timeAgoInMonths: {
            type: Sequelize.INTEGER
        },
        category: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'persons',
        timestamps: false
    }
);

module.exports = { Person };