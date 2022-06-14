const express = require('express');
const users = require('../data/Users.js');
const User = require('../Models/UserModel.js');
const Product = require('../Models/ProductModel.js')
const products = require('../data/Products.js')


const ImportData = express.Router();

ImportData.post('/user', async (req, res) => {
    await User.remove({});
    const ImportUser = await User.insertMany(users);
    res.send({ ImportUser })
})

ImportData.post('/product', async (req, res) => {
    await Product.remove({})
    const ImportProduct = await Product.insertMany(products);
    res.send({ ImportProduct })
})

module.exports = ImportData;