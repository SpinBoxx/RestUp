const express = require('express')
const asyncHandler = require('express-async-handler');
const Product = require('../Models/ProductModel');

const ProductRoute = express.Router();

ProductRoute.get('/', asyncHandler(
    async (req, res) => {
        const products = await Product.find();
        res.json(products)
    }
))

ProductRoute.get('/:id', asyncHandler(
    async (req, res) => {
        try{
            const id = req.params.id
            const product = await Product.findById(id)
            if(product){
                res.json(product)
            } else {
                res.status(404);
                throw new Error("Product not found")
            }
        } catch(error){
            res.status(404);
            throw new Error("There is an error with the id")
        }
        
        
    }
))

module.exports = ProductRoute;