const express = require('express');
const app = express();
const router = express.Router();
const ProductRoute = require('./routers/products.router');

app.get('/', (req, res, next) => {
    res.json({ msg: 'hello' })
})

app.use('/product', ProductRoute);

app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ msg: err.message || 'There is some error' })
})

module.exports = app;