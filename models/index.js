const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('db', 'user', 'password', {
    host: process.env['MYSQL_HOST'],
    dialect: 'mysql',
    port: 3306
});


module.exports = sequelize