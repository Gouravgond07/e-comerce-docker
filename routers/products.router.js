const Product = require('../models/product.models');

const router = require('express').Router();


router.get('/', async (req, res, next) => {
    const products = await Product.findAll();
    res.json(products)
})

module.exports = router;