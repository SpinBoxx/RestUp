const mongoose = require('mongoose')
require('dotenv').config()
const ConnectDatabase = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL, {});
        console.log("Connected");
    } catch(error){
        console.log(`error : ${error.message}`);
        process.exit(1);
    }
};
module.exports = ConnectDatabase