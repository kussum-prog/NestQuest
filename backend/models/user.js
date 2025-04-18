const {Schema,model} = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        requires: true,
        unique: true,
    },
    address:{
        type: String,
        required: true,
    },
    jwtToken:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
        },
    avatar:{
        type:String,
        default:"user.png"
    }

},{ timestamps:true });

module.exports = model('User', userSchema,"users");