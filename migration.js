const { Sequelize } = require('sequelize')
const { Umzug, SequelizeStorage } = require('umzug')
const sequelize = require('./models');

const umzug = new Umzug({
    migrations: {
        glob: 'migrations/*.js',
        resolve: ({ name, path, context }) => {
            console.log(name)
            // @ts-ignore
            const migration = require(path)
            return {
                // adjust the parameters Umzug will
                // pass to migration methods when called
                name,
                up: async () => migration.up(context, Sequelize),
                down: async () => migration.down(context, Sequelize),
            }
        },
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});

module.exports = umzug;