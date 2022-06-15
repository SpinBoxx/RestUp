const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: { 
        type:String,
        require: true,
    },
    email: { 
        type:String,
        require: true,
    },
    password: { 
        type:String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        require: true,
        default: false,
    }
},
{
    timestamps: true
});

// Login
UserSchema.methods.matchPassword = async function (enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

const User = mongoose.model("User", UserSchema)
module.exports = User;