const express = require('express')
const asyncHandler = require('express-async-handler');
const User = require('../Models/UserModel');
const GenerateToken = require('../Utils/GenerateToken');

const UserRoute = express.Router();

UserRoute.get('/', asyncHandler(
    async (req, res) => {
        const users = await User.find();
        res.json(users)
    }
))

UserRoute.post('/login', asyncHandler(
    async (req, res) => {
        const {email, password} = req.body;
        const user = await User.findOne({ email })
        if(user && (await user.matchPassword(password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email : user.email,
                isAdmin: user.isAdmin,
                token: GenerateToken(user.id),
                createdAt: user.createdAt
            })
        } else {
            console.log("erro")
            res.status(401);
            throw new Error("Invalid credential");
        }
    }
))

UserRoute.get('/:id', asyncHandler(
    async (req, res) => {
        try{
            const id = req.params.id
            const user = await User.findById(id)
            if(user){
                res.json(user)
            } else {
                res.status(404);
                throw new Error("User not found")
            }
        } catch(error){
            res.status(404);
            throw new Error("There is an error with the id")
        }
              
    }
))

module.exports = UserRoute;