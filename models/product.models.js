const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Product = sequelize.define('products', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    price: {
        type: DataTypes.DECIMAL
    }
});

module.exports = Product;