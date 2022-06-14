const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    rating:{
        type: Number,
        require: true,
    },
    comment:{
        type:String,
        require:true
    }
})

const ProductSchema = mongoose.Schema({
    name: { 
        type:String,
        require: true,
    },
    description: { 
        type:String,
        require: true,
    },
    reviews: [ReviewSchema]
},
{
    timeStamps: true
});

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;