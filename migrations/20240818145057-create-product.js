const { Sequelize, DataTypes } = require('sequelize')

/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface 
 */
async function up(queryInterface) {
    await queryInterface.createTable('products', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })
}


/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface 
 */
async function down(queryInterface) {
    await queryInterface.dropTable('products')
}

module.exports = { up, down }