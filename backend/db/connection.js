const sequelize = require('sequelize');
const Sequelize = sequelize.Sequelize

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'tech_test.db'
});

module.exports = { connection };