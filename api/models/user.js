const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    company:{
        type: String
    },
    datecreated:{
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('User', userSchema);
module.exports = User
